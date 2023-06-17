import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers/customers.service';
import { ActivatedRoute } from '@angular/router';
import { Customer, SentTransaction } from '../home/customer';
import { NgForm } from '@angular/forms';
import { Account, Transaction } from './transaction';
import { TransactionService } from '../services/transactions/transaction.service';
import { AccountsService } from '../services/accounts/accounts.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  constructor(
    private customerService: CustomersService,
    private router: ActivatedRoute,
    private transactionService: TransactionService,
    private accountService: AccountsService
  ) {}

  customer!: Customer;
  customerId!: string;
  successMessage: string = '';
  transaction: Transaction = {
    amount: 0,
    senderId: 0,
    receiverId: 0,
  };
  account: Account = {
    customerId: 0,
    initialCredit: 0
  }

  ngOnInit(): void {
    this.customerId = this.router.snapshot.params['id'];
    this.account.customerId = parseInt(this.customerId);
    this.customerService.GetCustomer(this.customerId).subscribe((c) => {
      this.customer = c;
      this.transaction.senderId = c.account.id;
    });
  }

  SendTransaction(transactionForm: NgForm) {
   this.transactionService.CreateTransaction(this.transaction)
   .subscribe(t => {
    this.successMessage = "Transaction created successfully";
    const tran: SentTransaction = {
      id: t,
      createdDate: new Date().getDate().toString(),
      amount: this.transaction.amount,
      senderId: parseInt(this.customerId),
      receiverId: this.transaction.receiverId,
    };
    
    this.customer.account.sentTransactions = [...this.customer.account.sentTransactions, tran];
    this.customer.account.balance = this.customer.account.balance - this.transaction.amount;
    transactionForm.reset();
    })
  }

  AddAccount(form: NgForm) {
    this.accountService.CreateAccount(this.account).subscribe(id => {
      console.log("Account created.")
      this.customerService.GetCustomer(this.customerId).subscribe((c) => {
        this.customer = c;
        this.transaction.senderId = c.account.id;
      });
    });

  }
}

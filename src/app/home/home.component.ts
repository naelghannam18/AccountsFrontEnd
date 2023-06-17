import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers/customers.service';
import { CreateCustomer, Customer, Account } from './customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private service: CustomersService){}
  
  customers!: Customer[];
  customer: CreateCustomer ={
    name: '',
    surname: ''
  }
  successMessage: string = '';
  
  ngOnInit(): void {
    this.service.GetCustomers().subscribe(c => {
      this.customers = c
    })
  }

  AddCustomer(createCustomerForm: NgForm) {
    this.service.CreateCustomer(this.customer).subscribe(c => {
      this.successMessage = "Customer added successfully";

      const acc: Account = {
        id: 0,
        balance: 0,
        customerId: 0,
        sentTransactions: [],
        receivedTransactions: []
      }

      const cust: Customer = {
        id: c,
        name: this.customer.name,
        surname: this.customer.surname,
        account: acc
      }

      this.customers = [...this.customers, cust]
    });
  }
}

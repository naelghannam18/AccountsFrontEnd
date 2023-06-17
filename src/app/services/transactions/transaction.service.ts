import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/customer/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  CreateTransaction(model: Transaction) {
    return this.http.post<number>('/api/transaction', model)
  }
}

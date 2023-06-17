import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from 'src/app/customer/transaction';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  CreateAccount(account: Account){
    return this.http.post<number>('/api/account', account);
  }
}

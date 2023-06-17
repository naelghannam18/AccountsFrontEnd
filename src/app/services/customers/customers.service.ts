import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateCustomer, Customer, UpdateCustomer } from 'src/app/home/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  GetCustomers() {
    return this.http.get<Customer[]>('/api/customer')
  }

  GetCustomer(id: string) {
    return this.http.get<Customer>(`/api/customer/${id}`)
  }

  DeleteCustomer(ids: number[]) {
    return this.http.delete('/api/customer', {
      body: ids
    })
  }

  UpdateCustomer(customer: UpdateCustomer) {
    return this.http.put('/api/customer', customer)
  }

  CreateCustomer(customer: CreateCustomer) {
    return this.http.post<number>('/api/customer', customer)
  }

}

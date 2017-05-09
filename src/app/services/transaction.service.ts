import { Injectable } from '@angular/core';
import {Transaction} from '../home/transactions/transaction.model';
import {Item} from '../home/items/item/item.model';
import {Http, Response} from '@angular/http';
import {AuthService} from './auth.service';

@Injectable()
export class TransactionService {

  transactions: Transaction[] = [];

  constructor(private http: Http, private authService: AuthService) { }

  addToHistory(basket: {item: Item, quantity: number}[], price: number) {
    this.transactions.push({date: new Date(), basket: basket, status: 'Pending', price: price});
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    this.http.post('/api/transactions' + token, {date: new Date(), basket: basket, status: 'Pending', price: price}).subscribe(
      (response: Response) => console.log(response),
      (error) => console.log(error)
    )
  }

  getMyHistory() {
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('/api/getHistory' + token).map((response: Response) => response.json());
  }

}

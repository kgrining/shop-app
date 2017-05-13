import {Injectable} from '@angular/core';
import {Transaction} from '../models/transaction.model';
import {Item} from '../models/item.model';
import {Response} from '@angular/http';
import {AuthService} from './auth.service';
import {AuthHttpService} from './auth-http.service';

@Injectable()
export class TransactionService {

  transactions: Transaction[] = [];

  constructor(private http: AuthHttpService) {
  }

  addToHistory(basket: { item: Item, quantity: number }[], price: number) {
    this.transactions = [...this.transactions, {date: new Date(), basket, status: 'Pending', price}];
    this.http.post('/api/transactions', {
      date: new Date(),
      basket,
      status: 'Pending',
      price
    }).subscribe(
      (response: Response) => alert('Transaction processed correctly'),
      (error) => alert('Error during processing transaction')
    );
  }

  getMyHistory() {
    return this.http.get('/api/getHistory');
  }

}

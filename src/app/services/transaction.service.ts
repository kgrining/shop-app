import {Injectable} from '@angular/core';
import {Transaction} from '../models/transaction.model';
import {AuthHttpService} from './auth-http.service';
import {BasketItem} from '../models/basketItem.model';

@Injectable()
export class TransactionService {

  transactions: Transaction[] = [];

  constructor(private http: AuthHttpService) {
  }

  addToHistory(basket: BasketItem[], price: number) {
    const newTransaction = {date: new Date(), basket, status: 'Pending', price};
    this.transactions = [...this.transactions, newTransaction];
    this.http.post('/api/transactions', newTransaction).subscribe(
      response => alert('Transaction processed correctly'),
      error => alert('Error during processing transaction')
    );
  }

  getMyHistory() {
    return this.http.get('/api/transactions/history');
  }

}

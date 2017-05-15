import {Component, Input} from '@angular/core';
import {Transaction} from '../../../models/transaction.model';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent {

  @Input() transactionItem: Transaction;

}

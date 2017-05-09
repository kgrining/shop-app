import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../transaction.model';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.css']
})
export class TransactionItemComponent implements OnInit {

  @Input() transactionItem: Transaction;

  constructor() { }

  ngOnInit() {

  }

}

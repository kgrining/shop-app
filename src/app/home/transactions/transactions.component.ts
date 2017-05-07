import {Component, OnInit} from '@angular/core';
import {Transaction} from "./transaction.model";
import {TransactionService} from "../../services/transaction.service";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[];
  isEmpty: Boolean = false;

  constructor(private transactionService:TransactionService) {
  }

  ngOnInit() {
    this.transactionService.getMyHistory().subscribe(
      (response) => {
        this.transactions = response;
        this.isEmpty = this.transactions.length===0;
      },
        (error) => console.log(error)
    );
  }

}

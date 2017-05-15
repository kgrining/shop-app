import {Component, OnInit} from '@angular/core';
import {BasketService} from '../../services/basket.service';
import {TransactionService} from '../../services/transaction.service';
import {BasketItem} from '../../models/basketItem.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: BasketItem[];
  basketPrice: number;

  constructor(private basketService: BasketService, private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.basket = this.basketService.basket;
    this.basketPrice = this.basketService.calculatePrice();
    this.basketService.basketPriceSubject.subscribe(
      basketPrice => this.basketPrice = basketPrice
    );
    this.basketService.basketLoadedSubject.subscribe(
      isLoaded => {
        if (isLoaded) {
          this.basket = this.basketService.basket;
        } else {
          alert('You don\'t have a saved basket!');
        }
      }
    );
  }

  onBuy() {
    this.transactionService.addToHistory(this.basket, this.basketPrice);
    this.basketService.clearBasket();
    this.basket = this.basketService.basket;
  }

  onSave() {
    this.basketService.saveBasket();
  }

  onLoad() {
    this.basketService.getBasket();
  }

}

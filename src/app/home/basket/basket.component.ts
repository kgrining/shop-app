import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../services/basket.service";
import {Item} from "../items/item/item.model";
import {TransactionService} from "../../services/transaction.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket : Array<{item: Item, quantity: number}>;
  basketPrice : number;
  constructor(private basketService: BasketService, private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.basket = this.basketService.basket;
    this.basketPrice = this.basket.reduce((total,current) => {
      return total + (current.item.price*current.quantity)
    },0);
    this.basketService.basketPriceSubject.subscribe(
      (basketPrice: number) => {
        this.basketPrice = basketPrice;
      }
    );
    this.basketService.basketLoadedSubject.subscribe(
      (isLoaded: boolean) => {
        this.basket = this.basketService.basket;
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

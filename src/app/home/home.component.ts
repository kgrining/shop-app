import {Component, OnInit} from '@angular/core';
import {Item} from './items/item/item.model';
import {BasketService} from '../services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  basket: Array<{item: Item, quantity: number}>;
  basketPrice: number;
  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.basket = this.basketService.basket;
    this.basketPrice = this.basketService.basketPrice;
    this.basketService.basketPriceSubject.subscribe(
      (basketPrice: number) => {
        this.basketPrice = basketPrice;
      }
    );
  }

}

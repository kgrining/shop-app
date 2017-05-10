import {Component, OnInit} from '@angular/core';
import {Item} from './items/item/item.model';
import {BasketService} from '../services/basket.service';
import {AuthService} from '../services/auth.service';
import {User} from '../landing/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  basket: Array<{item: Item, quantity: number}>;
  basketPrice: number;
  me: User;

  constructor(private basketService: BasketService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getMyUser().subscribe(
      (response) => this.me = response,
      (error) => console.log(error)
    );
    this.basket = this.basketService.basket;
    this.basketPrice = this.basketService.basketPrice;
    this.basketService.basketPriceSubject.subscribe(
      (basketPrice: number) => {
        this.basketPrice = basketPrice;
      }
    );
  }

}

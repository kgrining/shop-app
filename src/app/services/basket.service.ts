import {Injectable} from '@angular/core';
import {Item} from '../models/item.model';
import {Subject} from 'rxjs/Subject';
import {AuthHttpService} from './auth-http.service';

@Injectable()
export class BasketService {

  basket: { item: Item, quantity: number }[] = [];
  basketPriceSubject: Subject<number> = new Subject();
  basketLoadedSubject: Subject<boolean> = new Subject();

  constructor(private http: AuthHttpService) {
  }

  addToBasket(addedItem: Item) {
    const basketItem = this.basket.find(current => current.item.name === addedItem.name);
    if (basketItem === undefined) {
      this.basket = [...this.basket, {item: addedItem, quantity: 1}];
    } else {
      basketItem.quantity++;
    }
    this.basketPriceSubject.next(this.calculatePrice());
  }

  changeItemQuantity(changedItem: Item, newQuantity: number) {
    const basketItem = this.basket.find(current => current.item.name === changedItem.name);
    if (basketItem === undefined) {
      alert('item not in basket');
    } else {
      basketItem.quantity = newQuantity;
      this.basketPriceSubject.next(this.calculatePrice());
    }

  }

  removeFromBasket(removedItem: Item) {
    const basketItem = this.basket.find(current => current.item.name === removedItem.name);
    if (basketItem === undefined) {
      alert('item not in basket');
    } else {
      this.basket = this.basket.filter((current) => current.item.name !== removedItem.name);
      this.basketPriceSubject.next(this.calculatePrice());
    }
  }

  clearBasket() {
    this.basket = [];
    this.basketPriceSubject.next(this.calculatePrice());
  }

  saveBasket() {
    this.http.put('/api/users/saveBasket', this.basket).subscribe(
      (response) => alert('Basket saved'),
      (error) => alert('Error during basket saving')
    );
  }

  getBasket() {
    this.http.get('/api/users/getBasket').subscribe(
      (response) => {
        if (response) {
          this.basket = response;
          this.basketLoadedSubject.next(response.length > 0);
          if (response.length > 0) {
            this.basketPriceSubject.next(this.calculatePrice());
          }
        }
      },
      (error) => alert('Error during basket loading')
    );
  }

  calculatePrice() {
    return this.basket.reduce((total, current) => {
      return total + current.item.price * current.quantity;
    }, 0);
  }

}

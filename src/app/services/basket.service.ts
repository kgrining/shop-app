import { Injectable } from '@angular/core';
import {Item} from '../home/items/item/item.model';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';

@Injectable()
export class BasketService {

  basket : Array<{item: Item, quantity: number}> = [];
  basketPrice : number = 0.0;
  basketPriceSubject: Subject<number> = new Subject();
  basketLoadedSubject: Subject<boolean> = new Subject();

  constructor(private http: Http) { }

  addToBasket(addedItem: Item) {
    const ind = this.basket.findIndex(x => x.item.name === addedItem.name);
    this.basketPrice += addedItem.price;
    if(ind === -1) {
      this.basket.push({item: addedItem, quantity: 1});
    } else {
      this.basket[ind].quantity++;
    }
    this.basketPriceSubject.next(this.basketPrice);
  }

  changeItemQuantity(changedItem: Item, newQuantity: number) {
    const ind = this.basket.findIndex(x => x.item.name === changedItem.name);
    if (ind === -1) {
      console.log('item not in basket');
    } else {
      const quantDiff = newQuantity - this.basket[ind].quantity;
      this.basketPrice += quantDiff * changedItem.price;
      this.basketPriceSubject.next(this.basketPrice);
      this.basket[ind].quantity = newQuantity;
    }

  }

  removeFromBasket(removedItem: Item) {
    const ind = this.basket.findIndex(x => x.item.name === removedItem.name);
    if(ind === -1) {
      console.log('item not in basket')
    } else {
      this.basketPrice -= this.basket[ind].quantity * removedItem.price;
      this.basketPriceSubject.next(this.basketPrice);
      this.basket.splice(ind,1);
    }
  }

  clearBasket() {
    this.basket = [];
    this.basketPrice = 0;
    this.basketPriceSubject.next(this.basketPrice);
  }

  saveBasket() {
    const token = localStorage.getItem('token') !== null ? '?token=' + localStorage.getItem('token') : '';
    this.http.put('/api/users/saveBasket' + token, this.basket).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
  }

  getBasket() {
    const token = localStorage.getItem('token') !== null ? '?token=' + localStorage.getItem('token') : '';
    this.http.get('/api/users/getBasket' + token).map((response) => response.json()).subscribe(
      (response) => {
        if (response) {
          this.basket = response;
          this.basketPrice = this.basket.reduce((total, current) => {
            return total + current.item.price * current.quantity;
          }, 0);
          response.length > 0 ? this.basketLoadedSubject.next(true) : this.basketLoadedSubject.next(false);
          this.basketPriceSubject.next(this.basketPrice);
        }
      },
      (error) => console.log(error)
    );
  }

}

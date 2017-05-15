import {Item} from './item.model';

export class BasketItem {
  public quantity: number;
  public item: Item;

  constructor(quantity: number, item: Item) {
    this.quantity = quantity;
    this.item = item;
  }
}


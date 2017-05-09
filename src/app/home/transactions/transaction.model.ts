import {Item} from '../items/item/item.model';

export class Transaction {
  public date: Date;
  public basket: { item: Item, quantity: number }[];
  public status: string;
  public price: number;
}

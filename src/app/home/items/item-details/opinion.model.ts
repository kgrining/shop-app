import {Item} from "../item/item.model";
import {User} from "../../../landing/user.model";
export class Opinion {
  public date: Date;
  public owner: User;
  public item: Item;
  public description: string;

  constructor(date: Date, owner: User, item: Item, description: string) {
    this.date = date;
    this.owner = owner;
    this.item = item;
    this.description = description;
  }
}

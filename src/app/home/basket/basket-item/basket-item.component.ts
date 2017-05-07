import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../items/item/item.model";
import {BasketService} from "../../../services/basket.service";

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {

  @Input() basketItem: {item: Item, quantity: number};
  currentQuantity: number;

  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.currentQuantity = this.basketItem.quantity;
  }

  onRemove() {
    this.basketService.removeFromBasket(this.basketItem.item);
  }

  onQuantityChange() {
    if(this.currentQuantity !== this.basketItem.quantity) {
      this.basketService.changeItemQuantity(this.basketItem.item, this.currentQuantity);
    }
  }

}

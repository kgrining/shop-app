import {Component, Input, OnInit} from '@angular/core';
import {BasketService} from '../../../services/basket.service';
import {BasketItem} from '../../../models/basketItem.model';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {

  @Input() basketItem: BasketItem;
  currentQuantity: number;
  currentSum: number;

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {
    this.currentQuantity = this.basketItem.quantity;
    this.currentSum = this.basketItem.quantity * this.basketItem.item.price;
  }

  onRemove() {
    this.basketService.removeFromBasket(this.basketItem.item);
  }

  onQuantityChange() {
    if (this.currentQuantity !== this.basketItem.quantity) {
      this.currentSum = this.currentQuantity * this.basketItem.item.price;
      this.basketService.changeItemQuantity(this.basketItem.item, this.currentQuantity);
    }
  }

}

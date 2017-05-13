import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../../models/item.model';
import {BasketService} from '../../../services/basket.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item: Item;

  constructor(private basketService: BasketService) {
  }

  onAdd() {
    this.basketService.addToBasket(this.item);
  }

}

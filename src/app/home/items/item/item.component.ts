import {Component, Input, OnInit} from '@angular/core';
import {Item} from './item.model';
import {BasketService} from '../../../services/basket.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() nr: number;

  constructor(private basketService: BasketService) {
  }

  ngOnInit() {

  }

  onAdd() {
    this.basketService.addToBasket(this.item);
  }

}

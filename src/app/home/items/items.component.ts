import {Component, OnInit} from '@angular/core';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

  items = [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(
      response => this.items = response,
      err => alert('Error occured')
    );
  }
}

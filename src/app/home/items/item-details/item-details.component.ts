import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemService} from '../../../services/item.service';
import {Item} from '../item/item.model';
import {BasketService} from '../../../services/basket.service';
import {Opinion} from './opinion.model';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../landing/user.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Item;
  user: User;
  newOpinionDesc = '';
  constructor(private route: ActivatedRoute, private itemService: ItemService,
              private basketService: BasketService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getMyUser().subscribe(
      (response) => this.user = response,
      (error) => console.log(error)
    );
    this.itemService.getSingleItem(this.route.snapshot.params.id).subscribe(
      (response) => {
        this.item = response;
      },
      (error) => console.log(error)
    );
  }

  onAdd() {
    this.basketService.addToBasket(this.item);
  }

  onOpinion() {
    const newOpinion = new Opinion(new Date(), this.user, this.newOpinionDesc);
    this.item.opinions.push(newOpinion);
    this.itemService.addOpinion(this.route.snapshot.params.id, this.newOpinionDesc);
    this.newOpinionDesc = '';
  }


}

import {Injectable} from '@angular/core';
import {Item} from "../home/items/item/item.model";
import {Http} from "@angular/http";
import {AuthService} from "./auth.service";
import 'rxjs/Rx';

@Injectable()
export class ItemService {

  constructor(private http: Http, private authService: AuthService) {
  }

  items: Item[] = [];

  getItems() {
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('/api/items'+token)
      .map(
      (response)=>response.json()
    );
  }

  getSingleItem(id) {
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('/api/items/'+id+token)
      .map(
        (response)=>response.json()
      );
  }

}

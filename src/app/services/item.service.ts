import {Injectable} from '@angular/core';
import {Item} from '../home/items/item/item.model';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';
import 'rxjs/Rx';

@Injectable()
export class ItemService {

  items: Item[] = [];
  constructor(private http: Http, private authService: AuthService) {
  }
  getItems() {
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('/api/items' + token)
      .map(
      (response) => response.json()
    );
  }

  getSingleItem(id) {
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('/api/items/' + id + token)
      .map(
        (response) => response.json()
      );
  }

  addOpinion(itemId: string, content: string) {
    const body = {content: content};
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    this.http.post('/api/items/addOpinion/' + itemId + token, body).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
  }

}

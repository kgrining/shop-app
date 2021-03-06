import {Injectable} from '@angular/core';
import {AuthHttpService} from './auth-http.service';

@Injectable()
export class ItemService {


  constructor(private http: AuthHttpService) {
  }

  getItems() {
    return this.http.get('/api/items');
  }

  getSingleItem(id) {
    return this.http.get(`/api/items/${id}`);
  }

  addOpinion(itemId: string, content: string) {
    const body = {content};
    this.http.post(`/api/items/${itemId}/opinions`, body).subscribe(
      response => alert('Your opinion was added'),
      error => alert('Error during opinion adding')
    );
  }

}

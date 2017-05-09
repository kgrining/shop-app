import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from '../landing/user.model';
import 'rxjs/Rx';
import {Router} from '@angular/router';
import {BasketService} from './basket.service';

@Injectable()
export class AuthService {
  constructor(private http: Http, private router: Router, private basketService: BasketService) {
  }

  signUp(user: User) {
    this.http.post('/api/users', user)
      .map(
        (response: Response) => response.json().id_token
      )
      .subscribe(
        (token) => {
          localStorage.setItem('token', token);
          this.basketService.clearBasket();
          this.router.navigate(['/']);
        },
        (error) => console.log(error)
      )
  }

  signIn(name: String, password: String) {
    const data = {username: name, password: password};
    this.http.post('/api/users/authenticate', data)
      .map(
        (response: Response) => response.json().id_token
      )
      .subscribe(
        token => {
          localStorage.setItem('token', token);
          this.basketService.clearBasket();
          this.router.navigate(['/']);
        },
        (error) => console.log(error)
      )
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/landing']);
  }

  hasToken() {
    return localStorage.getItem('token') !== null;
  }

  getMyUser() {
    const token = this.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('api/users/me' + token).map((response) => response.json());
  }

}

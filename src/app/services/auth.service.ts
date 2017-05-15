import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../models/user.model';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private http: Http, private router: Router) {
  }

  signUp(user: User) {
    return this.http.post('/api/users', user)
      .map(
        response => response.json().id_token
      );
  }

  signIn(data) {
    return this.http.post('/api/users/authenticate', data)
      .map(
        response => response.json().id_token
      );
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
    return this.http.get('api/users/me' + token).map(response => response.json());
  }

}

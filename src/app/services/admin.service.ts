import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AuthService} from './auth.service';

@Injectable()
export class AdminService {

  constructor(private http: Http, private authService: AuthService) {}

  getAllUsers() {
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('api/users' + token).map((response) => response.json());
  }

  getAllTransactions() {
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('api/transactions' + token).map((response) => response.json());
  }

}

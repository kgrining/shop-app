import {Injectable} from '@angular/core';
import {AuthHttpService} from './auth-http.service';

@Injectable()
export class AdminService {

  constructor(private http: AuthHttpService) {
  }

  getAllUsers() {
    return this.http.get('api/users');
  }

  getAllTransactions() {
    return this.http.get('api/transactions');
  }

}

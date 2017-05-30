import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private http: Http, private authService: AuthService, private router: Router) {
  }

  canActivate() {
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('api/users/me' + token).map(
      response => {
        if (response.json().status !== 401) {
          return true;
        } else {
          this.router.navigate(['/landing', 'register']);
          return false;
        }
      }, error => {
        this.router.navigate(['/landing', 'register']);
        return false;
      }).catch(err => {
      this.router.navigate(['/landing', 'register']);
      return Observable.of(false);
    });
  }

}

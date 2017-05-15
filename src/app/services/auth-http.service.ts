import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthHttpService {

  constructor(private http: Http, private router: Router) {
  }

  createAuthorizationHeader() {
    const token = localStorage.getItem('token') !== null ? localStorage.getItem('token') : '';
    const headers = new Headers({'Authorization': `Bearer ${token}`});
    return headers;
  }

  get(url) {
    const headers = this.createAuthorizationHeader();
    return this.http.get(url, {
      headers: headers
    }).map(
      response => {
        return response.json();
      }
    ).catch(e => {
      if (e.status === 401 || e.status === 403) {
        this.router.navigate(['/landing']);
      }
      return e;
    });
  }

  post(url, data) {
    const headers = this.createAuthorizationHeader();
    return this.http.post(url, data, {
      headers: headers
    }).catch(e => {
      if (e.status === 401 || e.status === 403) {
        this.router.navigate(['/landing']);
      }
      return e;
    });
  }

  put(url, data) {
    const headers = this.createAuthorizationHeader();
    return this.http.put(url, data, {
      headers: headers
    }).catch(e => {
      if (e.status === 401 || e.status === 403) {
        this.router.navigate(['/landing']);
      }
      return e;
    });
  }

  delete(url, data) {
    const headers = this.createAuthorizationHeader();
    return this.http.delete(url, {
      headers: headers
    }).catch(e => {
      if (e.status === 401 || e.status === 403) {
        this.router.navigate(['/landing']);
      }
      return e;
    });
  }
}

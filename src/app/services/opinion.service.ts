import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "./auth.service";

@Injectable()
export class OpinionService {

  constructor(private http: Http, private authService: AuthService) { }

  addOpinion(desc: string, itemId: string) {
    const body = {desc: desc, item: itemId};
    const token = this.authService.hasToken() ? '?token=' + localStorage.getItem('token') : '';
    this.http.post('/api/opinions'+token, body).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}

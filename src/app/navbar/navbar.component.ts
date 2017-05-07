import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() price : number;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logOut();
  }

}

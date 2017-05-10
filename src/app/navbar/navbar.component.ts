import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../landing/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() price: number;
  @Input() me: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logOut();
  }

}

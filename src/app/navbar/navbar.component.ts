import {Component, Input} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() price: number;
  @Input() me: User;

  constructor(private authService: AuthService) {
  }

  onLogout() {
    this.authService.logOut();
  }

}

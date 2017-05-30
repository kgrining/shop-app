import {Component, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {BasketService} from '../../services/basket.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('login') signinForm: NgForm;
  errorLoginMessage = '';
  user = {
    username: '',
    email: '',
    password: ''
  };
  loginCredentials = {
    usernameOrEmail: '',
    password: ''
  };

  constructor(private authService: AuthService, private basketService: BasketService, private router: Router) {
  }

  onLogin() {
    this.loginCredentials.usernameOrEmail = this.signinForm.value.usernameOrEmail;
    this.loginCredentials.password = this.signinForm.value.passwordLogin;
    this.signinForm.reset();
    this.authService.signIn(this.loginCredentials).subscribe(
      token => {
        localStorage.setItem('token', token);
        this.basketService.clearBasket();
        this.router.navigate(['/']);
      },
      error => this.errorLoginMessage = error.json().message
    );

  }
}

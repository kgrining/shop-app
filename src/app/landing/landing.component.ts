import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {BasketService} from '../services/basket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  @ViewChild('login') signinForm: NgForm;
  errorLoginMessage = '';
  errorRegisterMessage = '';
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

  ngOnInit() {
  }

  onRegister() {
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.signupForm.reset();
    this.authService.signUp(this.user).subscribe(
        (token) => {
          localStorage.setItem('token', token);
          this.basketService.clearBasket();
          this.router.navigate(['/shop']);
        },
        (error) => this.errorRegisterMessage = 'Registration failed'
      );

  }

  onLogin() {
    this.loginCredentials.usernameOrEmail = this.signinForm.value.usernameOrEmail;
    this.loginCredentials.password = this.signinForm.value.passwordLogin;
    this.signinForm.reset();
    this.authService.signIn(this.loginCredentials).subscribe(
      token => {
        localStorage.setItem('token', token);
        this.basketService.clearBasket();
        this.router.navigate(['/shop']);
      },
      (error) =>  this.errorLoginMessage = error.json().message
    );

  }
}

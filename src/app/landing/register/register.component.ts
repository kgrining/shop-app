import {Component, OnInit, ViewChild} from '@angular/core';
import {BasketService} from '../../services/basket.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  errorRegisterMessage = '';
  user = {
    username: '',
    email: '',
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
      token => {
        localStorage.setItem('token', token);
        this.basketService.clearBasket();
        this.router.navigate(['/']);
      },
      error => this.errorRegisterMessage = 'Registration failed'
    );

  }
}

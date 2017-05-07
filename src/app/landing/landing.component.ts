import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  @ViewChild('login') signinForm: NgForm;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit() {
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.signupForm.reset();
    this.authService.signUp(this.user);

  }


  onLogin() {
    this.authService.signIn(this.signinForm.value.nameLogin,this.signinForm.value.passwordLogin);
    this.signinForm.reset();
  }

}

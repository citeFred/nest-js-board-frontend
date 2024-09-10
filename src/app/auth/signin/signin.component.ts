import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  onSignIn() {
    const signInData = {
      email: this.email,
      password: this.password,
    };
    console.log('Sign In Data:', signInData);
  }
}

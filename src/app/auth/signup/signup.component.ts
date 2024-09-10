import { Component } from '@angular/core';
import { UserRole } from '../user-role.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  role: UserRole = UserRole.USER;
  postalCode: string = '';
  address: string = '';
  detailAddress: string = '';

  constructor() {}

  onSignUp() {
    const signUpData = {
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.role,
      postalCode: this.postalCode,
      address: this.address,
      detailAddress: this.detailAddress,
    };
    console.log('Sign Up Data:', signUpData);
  }
}

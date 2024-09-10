import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserRole } from '../../models/common/user-role.enum';
import { Router } from '@angular/router';
import { SignUpRequestData } from 'src/app/models/auth/auth-signup-request-data.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  passwordConfirm: string = '';
  email: string = '';
  role: UserRole = UserRole.USER;
  postalCode: string = '';
  address: string = '';
  detailAddress: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp() {
    if (this.password !== this.passwordConfirm) {
      console.error('Passwords do not match');
      return;
    }

    const signUpRequestData: SignUpRequestData = {
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.role,
      postalCode: this.postalCode,
      address: this.address,
      detailAddress: this.detailAddress,
    };
    
    this.authService.signUp(signUpRequestData).subscribe({
      next: response => {
        if (response.success) {
          console.log('Sign Up successful:', response.data);
          this.router.navigate(['auth']);
        } else {
          console.error('Sign Up failed:', response.message);
        }
      },
      error: err => {
        console.error('Sign Up error:', err);
      },
      complete: () => {
        console.log('Sign Up request completed.');
      }
    });
  }
}

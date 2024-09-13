import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { SignInRequestData } from 'src/app/models/auth/auth-signin-request-data.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignIn() {
    const signInRequestData: SignInRequestData = {
      email: this.email,
      password: this.password,
    };

    this.authService.signIn(signInRequestData).subscribe({
      next: response => {
        if (response.success) {
          this.router.navigate(['/']);
        } else {
          console.error('Sign In failed:', response.message);
        }
      },
      error: err => {
        console.error('Sign In error:', err);
      },
      complete: () => {
        console.log('Sign In request completed.');
      }
    });
  }
}

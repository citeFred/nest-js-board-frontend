import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserRole } from '../user-role.enum';
import { Router } from '@angular/router'; // Router를 사용하여 로그인 후 페이지 이동

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

  async onSignUp() {
    if (this.password !== this.passwordConfirm) {
      console.error('Passwords do not match');
      return;
    }

    const signUpData = {
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.role,
      postalCode: this.postalCode,
      address: this.address,
      detailAddress: this.detailAddress,
    };
    
    try {
      const response = await this.authService.signUp(signUpData);
      if (response.success) {
        console.log('Sign Up successful:', response.data);
        // Redirect or show a success message
        this.router.navigate(['auth']);
      } else {
        console.error('Sign Up failed:', response.message);
      }
    } catch (error) {
      console.error('Sign Up error:', error);
    }
  }
}

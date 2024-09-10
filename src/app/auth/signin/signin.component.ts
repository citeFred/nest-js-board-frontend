import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Router를 사용하여 로그인 후 페이지 이동

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {} // AuthService와 Router 주입

  async onSignIn() {
    const signInData = {
      email: this.email,
      password: this.password,
    };

    try {
      const response = await this.authService.signIn(signInData);

      // 로그인 성공 후 대시보드 또는 홈 페이지로 이동
      if (response.success) {
        this.router.navigate(['/']);
      } else {
        console.error('Sign In failed:', response.message);
      }
    } catch (error) {
      console.error('Sign In error:', error);
    }
  }
}

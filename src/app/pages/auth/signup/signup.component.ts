import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/models/user/user-role.enum';

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
  profilePicture: File | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp() {
    if (this.password !== this.passwordConfirm) {
      console.error('Passwords do not match');
      return;
    }

    // FormData를 사용하여 데이터를 서버로 전송
    const formData = new FormData();
    formData.append('username', this.username);
    formData.append('password', this.password);
    formData.append('email', this.email);
    formData.append('role', this.role);
    formData.append('postalCode', this.postalCode);
    formData.append('address', this.address);
    formData.append('detailAddress', this.detailAddress);
    
    // 프로필 사진이 선택된 경우 FormData에 추가
    if (this.profilePicture) {
      formData.append('profilePicture', this.profilePicture);
    }

    // 회원가입 API 호출
    this.authService.signUp(formData).subscribe({
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

  // 파일 선택 시 호출되는 메서드
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profilePicture = file;
    }
  }
}

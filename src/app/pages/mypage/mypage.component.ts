import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ApiResponse } from 'src/app/models/common/api-response.interface'; // ApiResponse 인터페이스 임포트
import { UserWithFilesResponseData } from 'src/app/models/user/user-with-file-response-data.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  user: UserWithFilesResponseData | undefined;
  profileImage: string | undefined;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit() {
    const userId = this.authService.getUserIdFromToken();
    if (userId !== null) {
      this.userService.getUserProfileById(userId).subscribe({
        next: response => {
          if (response.success) {
            this.user = response.data;
            this.setProfileImage();
          } else {
            console.error(response.message);
          }
        },
        error: err => {
          console.error('Error fetching user:', err);
        },
        complete: () => {
          console.log('Fetching user request completed.');
        }
      });
    } else {
      console.error('User ID is null. User is not logged in.');
    }
  }

  setProfileImage() {
    if (this.user && this.user.files) {
      const profileFile = this.user.files.find(file => file.fileType === 'PROFILE');
      this.profileImage = profileFile ? profileFile.path : undefined;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ApiResponse } from 'src/app/models/common/api-response.interface'; // ApiResponse 인터페이스 임포트
import { UserWithFilesResponseData } from 'src/app/models/user/user-with-file-response-data.interface';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  user: UserWithFilesResponseData | undefined;
  profileImage: string | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    const userId = 17; // 임시 1번 유저 하드코딩
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
  }

  setProfileImage() {
    if (this.user && this.user.files) {
      const profileFile = this.user.files.find(file => file.fileType === 'PROFILE');
      this.profileImage = profileFile ? profileFile.path : undefined;
    }
  }
}

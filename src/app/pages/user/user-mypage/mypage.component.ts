import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { UserWithProfilePictureResponseData } from 'src/app/models/user/user-with-profile-picture-response-data.interface';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  user: UserWithProfilePictureResponseData | undefined;
  profilePicture: string | undefined;
  showDeleteAlert: boolean = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private location: Location,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const userId = this.authService.getUserIdFromToken();
    if (userId !== null) {
      this.userService.getUserProfileById(userId).subscribe({
        next: response => {
          if (response.success) {
            this.user = response.data;
            this.setProfilePicture();
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

  setProfilePicture() {
    if (this.user && this.user.profilePictures && this.user.profilePictures.length > 0) {
        const profilePicture = this.user.profilePictures[this.user.profilePictures.length - 1]; // 마지막 업로드된 사진
        this.profilePicture = profilePicture.url;
        console.log(profilePicture)
    } else {
        this.profilePicture = undefined;
    }
  }

  goBack() {
    this.location.back();
  }


  updateUser() {
    const userId = this.authService.getUserIdFromToken();
    console.log("update user's id:"+userId)
    if (userId) {
      this.router.navigate(['my-page/update', userId]);
    } else {
      console.error('User ID is null, cannot navigate to edit page.');
    }
  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: '회원 탈퇴',
      message: '정말로 회원을 탈퇴 하시겠습니까?',
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          handler: () => {
            console.log('탈퇴가 취소되었습니다.');
          }
        },
        {
          text: '삭제',
          handler: () => {
            this.deleteUser();
          }
        }
      ]
    });
    await alert.present(); // 알림 표시
  }

  deleteUser() {
    const userId = this.authService.getUserIdFromToken();
    
    if (userId) {
      this.userService.deleteUser(+userId).subscribe({
        next: response => {
          if (response.success) {
            console.log('Delete an user successful:', response.data);
            this.router.navigate(['/']);
          } else {
            console.error('Delete an user failed:', response.message);
          }
        },
        error: err => {
          console.error('Delete an user error:', err);
        },
        complete: () => {
          console.log('Delete an user request completed.');
        }
      });
    } else {
      console.error('User ID is null, cannot delete the user.');
    }
  }
}

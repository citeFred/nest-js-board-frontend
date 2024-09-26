import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  postalCode: string = '';
  address: string = '';
  detailAddress: string = '';
  profilePicture: File | null = null;
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.loadUser(this.userId);
  }

  loadUser(id: number) {
    this.userService.getUserProfileById(id).subscribe(response => {
      if (response.success) {
        this.postalCode = response.data.postalCode;
        this.address = response.data.address;
        this.detailAddress = response.data.detailAddress;
      } else {
        console.error('Failed to load user:', response.message);
      }
    });
  }

  onUpdateUser() {
    const formData = new FormData();
    formData.append('postalCode', this.postalCode);
    formData.append('address', this.address);
    formData.append('detailAddress', this.detailAddress);

    if (this.profilePicture) {
      formData.append('profilePicture', this.profilePicture);
    }

    // 수정 API 호출
    this.userService.updateUser(this.userId, formData).subscribe({
      next: response => {
        if (response.success) {
          console.log(response)

          console.log('User updated successfully:', response.data);
          this.router.navigate(['my-page']);
        } else {
          console.error('Update user failed:', response.message);
        }
      },
      error: err => {
        console.error('Update user error:', err);
      },
      complete: () => {
        console.log('Update user request completed.');
      }
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profilePicture = file;
      console.log(file.name)
    }
  }

  goBack() {
    this.router.navigate(['/my-page']);
  }
}
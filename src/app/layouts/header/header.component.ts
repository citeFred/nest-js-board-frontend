import { Component, OnInit } from '@angular/core';
import { UserWithFilesResponseData } from 'src/app/models/user/user-with-file-response-data.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userProfilePicture: string = '/assets/default-profile.png';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.userProfilePicture = this.authService.getUserProfilePictureFromToken() || '/assets/default-profile.png';
    }
  }
}

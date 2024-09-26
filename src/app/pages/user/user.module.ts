import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserUpdateComponent } from './user-update/user-update.component';
import { MypageComponent } from './user-mypage/mypage.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserRoutingModule
  ],
  declarations: [MypageComponent, UserUpdateComponent]
})
export class UserModule {}

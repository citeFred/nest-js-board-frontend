import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MypageComponent } from './user-mypage/mypage.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {
    path: '', component: MypageComponent
  }, 
  {
    path: 'update/:id', component: UserUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthRoutingModule
  ],
  declarations: [SignInComponent, SignUpComponent]
})
export class AuthModule { }

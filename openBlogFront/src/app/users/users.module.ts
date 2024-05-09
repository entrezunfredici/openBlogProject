import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { UserProfileViewComponent } from './user-profile-view/user-profile-view.component';
import { UsersComponent } from './users.component';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    LogInFormComponent,
    RegisterFormComponent,
    ChangePasswordFormComponent,
    UserProfileFormComponent,
    UserProfileViewComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }

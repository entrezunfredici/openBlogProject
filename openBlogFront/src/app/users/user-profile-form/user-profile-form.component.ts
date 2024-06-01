import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users, loginResponse } from '../../model/users.model'

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.scss'
})
export class UserProfileFormComponent {
  constructor(private router: Router, private userService: UsersService) { }
  userInfo: any = this.userService.getUserInfo();
  Email: string = '';
  password: string = '';
  username: string = this.userInfo.data.username;
  description: string = '';
  user: Users;
  defaultUsername: string = this.userInfo.data.username;
  //defaultEmail: string = this.userInfo.data.email;
  onSubmitProfile() {
    console.log('onSubmit');
  }
  onSubmitDescription() {
    console.log('onSubmit');
  }
  navigateToChangePassword() {
    console.log("change password");
    this.router.navigate(['/users/change_password']);
  }
  backToMenu() {
    this.router.navigate(['/']);
  }
  logout() {
    console.log('logOut');
    this.userService.clearToken();
    this.router.navigate(['/']);
  }
}

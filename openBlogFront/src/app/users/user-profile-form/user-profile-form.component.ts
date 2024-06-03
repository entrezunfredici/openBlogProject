import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users, loginResponse, updaterBody } from '../../model/users.model'

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.scss'
})
export class UserProfileFormComponent {
  constructor(private router: Router, private userService: UsersService) { }
  userInfo: any = this.userService.getUserInfo();
  Email: string = this.userInfo.data.email;
  username: string = this.userInfo.data.username;
  description: string = this.userInfo.data.description;
  userPhoto: string = this.userInfo.data.userPhoto;
  user: Users;
  update: updaterBody;
  onChangeUser() {
    console.log('onSubmit');
    this.update= {
      "username": this.username,
      "email": this.Email,
      "description": this.description,
      "userPhoto": this.userPhoto
    }
    console.log(this.userService.updateUser(this.userInfo.data.id, this.update));
    this.router.navigate(['/']);
  }
  navigateToChangePassword() {
    this.router.navigate(['/users/change_password']);
  }
  backToMenu() {
    this.router.navigate(['/']);
  }
  logout() {
    this.userService.clearToken();
    this.router.navigate(['/']);
  }
}

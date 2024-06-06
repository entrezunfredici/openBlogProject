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
  Email: string = "";
  username: string = "";
  description: string = "";
  userPhoto: string = this.userInfo.data.userPhoto;
  password: string = "";
  user: Users;
  update: updaterBody;
  defaultPhoto: string = this.userInfo.data.userPhoto;
  defaultDescription: string = this.userInfo.data.description;
  defaultEmail: string = this.userInfo.data.email;
  defaultUsername: string = this.userInfo.data.username;
  onChangeUser() {
    console.log("User info:", this.userInfo.data);
    this.update = {
      username: this.username || this.defaultUsername,
      password: this.password,
      email: this.Email || this.defaultEmail,
      description: this.description || this.defaultDescription,
      userPhoto: this.userPhoto || this.defaultPhoto
    };
    console.log("Update payload:", this.update);
    this.userService.updateUser(this.userInfo.data.id, this.update).subscribe(
      response => {
        console.log("Update response:", response);
      },
      error => {
        console.error("Update error:", error);
      }
    );
    this.backToMenu();
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

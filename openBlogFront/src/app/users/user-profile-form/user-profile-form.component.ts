import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrl: './user-profile-form.component.scss'
})
export class UserProfileFormComponent {
  constructor(private router: Router, private userService: UsersService) { }
  Email: string = '';
  password: string = '';
  username: string = '';
  description: string = '';
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
    //this.userService.logout();
    this.router.navigate(['/']);
  }
}

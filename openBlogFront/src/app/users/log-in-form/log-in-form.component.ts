import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users } from '../../model/users.model'

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrl: './log-in-form.component.scss'
})
export class LogInFormComponent {
  constructor(private router: Router, private userService: UsersService) { }
  usernameOrEmail: string = '';
  password: string = '';
  username: string = '';
  user: Users;
  token: string = '';
  // register() {
  //   this.userService.login({username: this.username, password: this.password}).subscribe({
  //     next: (users) => {
  //       console.log(users)
  //       //window.localStorage.setItem("token", token);
  //     },
  //     error: (error) => {
  //       console.error('error creating user:', error);
  //     }
      
  //   });
  //   console.log('Username', this.username);
  //   console.log('email', this.email)
  //   console.log('Password', this.password);
  // }

  onSubmit() {
    this.userService.login(this.user).subscribe({
      next: (users) => {
        console.log(users)
        //window.localStorage.setItem("token", token);
      },
      error: (error) => {
        console.error('error creating user:', error);
      }
      
    });
    console.log('Username Or Email', this.usernameOrEmail);
    console.log('Password', this.password);
    this.token = '';
    //Windows.localStorage.setItem("token", token);
  }

  navigateToRegister() {
    console.log("register");
    this.router.navigate(['/users/register']);
  }
  navigateToChangePassword() {
    console.log("change password");
    this.router.navigate(['/users/change_password']);
  }
}

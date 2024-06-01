import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users, loginResponse } from '../../model/users.model'

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
    // try{
    //   this.token = this.userService.login(this.username, this.password);
    //   console.log(this.token)
    //   this.router.navigate(['/']);
    //   localStorage.setItem("token", this.token);
    // }catch (error){
    //   console.error('error creating user:', error);
    // }
    this.userService.login(this.usernameOrEmail, this.password).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['/']);
        localStorage.setItem("token", response.token);
      },
      error: (error) => {
        console.error('error creating user:', error);
      }
    });
    console.log('Username Or Email', this.usernameOrEmail);
    console.log('Password', this.password);
    this.token = '';
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

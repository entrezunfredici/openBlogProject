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

  onSubmit() {
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

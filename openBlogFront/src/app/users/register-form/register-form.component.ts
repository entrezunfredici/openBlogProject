import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users } from '../../model/users.model'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  constructor(private router: Router, private UserService :UsersService) { }
  username: string;
  email: string;
  password: string;
  newUser: Users;
  register() {
    this.UserService.register(this.username, this.email, this.password).subscribe({
      next: (users) => {
        this.router.navigate(['/users']);
        //window.localStorage.setItem("token", token);
      },
      error: (error) => {
        console.error('error creating user:', error);
      }
    });
  }

  navigateToLogin() {
    this.router.navigate(['/users']);
  }
}

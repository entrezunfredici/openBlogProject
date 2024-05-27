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
  username: string = '';
  email: string = '';
  password: string = '';
  newUser: Users = {
    id: 0,
    username: this.username,
    userPhoto: "",
    email: this.email,
    password: this.password,
    nbPosts: 0,
    followers: 0,
    description: "",
    role: "user"
  }
  register() {
    this.UserService.register(this.newUser).subscribe({
      next: (users) => {
        console.log(users)
      },
      error: (error) => {
        console.error('error creating user:', error);
      }
    });
    console.log('Username', this.username);
    console.log('Password', this.password);
  }

  navigateToLogin() {
    console.log("login");
    this.router.navigate(['/']);
  }
}

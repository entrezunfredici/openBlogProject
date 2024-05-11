import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  constructor(private router: Router) { }
  username: string = '';
  email: string = '';
  password: string = '';

  register() {
    console.log('Username', this.username);
    console.log('Password', this.password);
  }

  navigateToLogin() {
    console.log("login");
    this.router.navigate(['/']);
  }
}

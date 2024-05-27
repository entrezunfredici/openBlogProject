import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrl: './log-in-form.component.scss'
})
export class LogInFormComponent {
  constructor(private router: Router) { }
  usernameOrEmail: string = '';
  password: string = '';

  onSubmit() {
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.scss'
})
export class ChangePasswordFormComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    console.log('Email', this.email);
    console.log('Password', this.password);
    console.log('Password', this.confirmPassword);
  }
}

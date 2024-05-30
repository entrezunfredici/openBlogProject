import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersModule } from './users.module';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: Router
})

export class AuthGuard implements CanActivate {

  constructor(private userService: UsersService, private router: Router) { }

  canActivate(): boolean {
    //if (!this.userService.isLoggedIn()) {
    if (false) {
      this.router.navigate(['/users/config']);
      return true;
    } else {
      this.router.navigate(['/users']);
      return false;
    }
  }
}
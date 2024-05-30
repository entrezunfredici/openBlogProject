import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private userService: UsersService, private router: Router) { }

  canActivate() {
    if (this.userService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/users/login']);
    return false;
  }
}
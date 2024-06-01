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
    console.log(this.userService.isLoggedIn())
    if (this.userService.isLoggedIn()) {
      console.log("test")
      return true;
    } else {
      console.log("else")
      this.router.navigate(['/users']);
      return false;
    }
  }
}
import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'] // Correction ici
})
export class SidebarComponent {
  constructor(private router: Router, private usersService: UsersService) { }

  username: string = "";
  ngOnInit(): void {
    const userInfo = this.usersService.getUserInfo();
    console.log('User info:', userInfo);
    if (userInfo) {
      this.username = userInfo.data.name;
    }
  }
  navigateToNewPosts() {
    this.router.navigate(['/new']);
  }

  navigateToUsersInterface() {
    this.router.navigate(['/users/config']);
  }
}

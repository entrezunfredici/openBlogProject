import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'] // Correction ici
})
export class SidebarComponent {
  constructor(private router: Router) { }

  navigateToNewPosts() {
    this.router.navigate(['/new']);
  }

  navigateToUsersInterface() {
    this.router.navigate(['/users/config']);
  }
}

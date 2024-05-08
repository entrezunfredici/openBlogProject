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
    console.log("test");
    this.router.navigate(['/new']);
  }

  navigateToUsersInterface() {
    alert("users");
    //this.router.navigate(['/users']);
  }
}

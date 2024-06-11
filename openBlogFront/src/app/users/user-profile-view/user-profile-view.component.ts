import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users, UsersWithoutPassword } from '../../model/users.model';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrl: './user-profile-view.component.scss'
})
export class UserProfileViewComponent {
  constructor(private router: Router, private route: ActivatedRoute, private userService: UsersService) { }
  user: UsersWithoutPassword = {
    id: 1,
    username: '',
    userPhoto: '',
    email: '',
    nbPosts: 0,
    followers: 0,
    description: '',
    role: ''
  };
  id=1;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id =+ params['id'];
      this.getUser(this.id);
    });
  }

  getUser(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (data: UsersWithoutPassword) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur', err);
      }
    });
  }
  backToMenu() {
    this.router.navigate(['/']);
  }
  followUser() {
    
  }
}

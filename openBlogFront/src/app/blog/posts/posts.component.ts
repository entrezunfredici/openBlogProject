import { Component, Input } from '@angular/core';
import { Posts } from '../../model/posts.model'
import { UsersService } from '../../services/users.service';
import { Users } from '../../model/users.model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  user: Users={
    id: 0,
    username: "test",
    userPhoto: "ezqrstdyfughi",
    email: "frwwv<",
    password: "",
    nbPosts: 0,
    followers: 0,
    description: "",
    role: ""
  };
  @Input() posts: Posts = {
    id: 0,
    authorId: 0,
    title: "",
    content: "",
    nbComments: 0,
    nbLikes: 0,
    nbDislikes: 0,
    nbReports: 0,
    nbViews: 0
  };
  constructor(private UsersService :UsersService) { }
  ngOnInit(){
    this.UsersService.getUserById(this.posts.authorId).subscribe({
      next: (user) => {
        this.user = user;
        console.log(user);
      },
      error: (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    });
  }
}

// export class CommentsComponent {
  
// }

// export class SubjectsComponent {
  
// }

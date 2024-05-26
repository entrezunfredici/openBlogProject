import { Component, Input } from '@angular/core';
import { Posts } from '../../model/posts.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  @Input() posts: Posts = {
    id: 0,
    authorId: 0,
    title: "",
    content: "",
    nbComments: 0,
    nbLikes: 0,
    nbDislikes: 0,
    nbReports: 0,
    nbViews: 0,
    user: {
      id: 0,
      username: '',
      userPhoto: '',
      email: '',
      password: '',
      nbPosts: 0,
      followers: 0,
      description: '',
      role: ''
    }
  };
}

// export class CommentsComponent {
  
// }

// export class SubjectsComponent {
  
// }

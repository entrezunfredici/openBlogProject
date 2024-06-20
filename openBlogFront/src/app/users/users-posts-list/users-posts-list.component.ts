import { Component, Input } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Posts } from '../../model/posts.model'

@Component({
  selector: 'app-users-posts-list',
  templateUrl: './users-posts-list.component.html',
  styleUrl: './users-posts-list.component.scss'
})
export class UsersPostsListComponent {
  constructor(private BlogService :BlogService) { }
  @Input() userId: number;
  posts: Posts[] = [];
  ngOnInit(){
    console.log(this.userId);
    this.BlogService.getPostByAuthorId(this.userId).subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    });
  }
}

import { Component, Input } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Posts } from '../../model/posts.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  constructor(private BlogService :BlogService) { }
  posts: Posts[] = [];
  ngOnInit(){
    this.BlogService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    });
  }
}

import { Component, Input } from '@angular/core';
import { Posts } from '../../model/posts.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  constructor(private blogService: BlogService) { }
  @Input() posts: Posts;
  ngOnInit(){
  }
  likeClick() {
    this.blogService.incrementNbLikes(this.posts.id).subscribe();
  }
  dislikeClick(){
    this.blogService.incrementNbDislikes(this.posts.id).subscribe();
  }
  reportClick(){

  }
}

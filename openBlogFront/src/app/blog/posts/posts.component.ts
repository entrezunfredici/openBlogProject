import { Component, Input } from '@angular/core';
import { Posts } from '../../model/posts.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  @Input() posts: Posts;
  ngOnInit(){
  }
}

// export class CommentsComponent {
  
// }

// export class SubjectsComponent {
  
// }

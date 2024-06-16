import { Component, Input } from '@angular/core';
import { Posts } from '../../model/posts.model';
import { BlogService } from '../../services/blog.service';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  constructor(private blogService: BlogService, private usersService: UsersService) { }
  userInfo: any = this.usersService.getUserInfo();
  @Input() posts: Posts;
  ngOnInit(){
  }
  likeClick() {
    this.blogService.addReaction(this.posts.id, this.userInfo.id, "like");
  }
  dislikeClick(){
    this.blogService.addReaction(this.posts.id, this.userInfo.id, "dislike");
  }
  reportClick(){
    this.blogService.addReaction(this.posts.id, this.userInfo.id, "report");
  }
}

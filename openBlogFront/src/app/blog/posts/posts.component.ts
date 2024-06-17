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
  userInfo: any = {}
  @Input() posts: Posts;
  ngOnInit(){
  }
  likeClick() {
    if(this.usersService.isLoggedIn()){
      this.userInfo = this.usersService.getUserInfo();
      this.blogService.addReaction(this.posts.id, this.userInfo.data.id, "like").subscribe({
        next: (result) => {
          console.log(result);
        },
        error: (error) => {
          console.error('error adding like:', error);
        }
      });
    }
  }
  dislikeClick(){
    if(this.usersService.isLoggedIn()){
      this.userInfo = this.usersService.getUserInfo();
      this.blogService.addReaction(this.posts.id, this.userInfo.data.id, "dislike").subscribe({
        next: (result) => {
          
        },
        error: (error) => {
          console.error('error adding like:', error);
        }
      });
    }
  }
  reportClick(){
    if(this.usersService.isLoggedIn()){
      this.userInfo = this.usersService.getUserInfo();
      console.log(this.userInfo)
      this.blogService.addReaction(this.posts.id, this.userInfo.data.id, "report").subscribe({
        next: (result) => {
          
        },
        error: (error) => {
          console.error('error adding like:', error);
        }
      });
    }
  }
}

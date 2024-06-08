import { UsersService } from './../../services/users.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsTemplate } from '../../model/posts.model';
import { Users } from '../../model/users.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-posts-writer',
  templateUrl: './posts-writer.component.html',
  styleUrl: './posts-writer.component.scss'
})
export class PostsWriterComponent {
  constructor(private router: Router, private blogService: BlogService, private usersService: UsersService) { }
  userInfo: any = this.usersService.getUserInfo();
  authorName: number = this.userInfo.name;
  postTitle: string = '';
  postContent: string = '';
  user: Users;
  createPost(){
    if((this.postTitle === '') || (this.postContent === '')) {
      alert('Please fill in all fields');
      return;
    }
    this.blogService.createPost(this.postTitle, this.postContent, this.userInfo.data.id).subscribe({
      next: (posts) => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('error creating post:', error);
      }
    });
    this.usersService.increaseNbPosts(this.userInfo.data.id).subscribe({
      next: (user) => {
        //console.log(result);
      },
      error: (error) => {
        console.error('error increasing nbPosts:', error);
      }
    });
  }

  navigateToMain() {
    this.router.navigate(['/']);
  }
}

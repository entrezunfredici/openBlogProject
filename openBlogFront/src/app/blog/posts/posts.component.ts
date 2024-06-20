import { Component, Input, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { Posts, Reactions } from '../../model/posts.model';
import { BlogService } from '../../services/blog.service';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  constructor(
    private router: Router,
    private blogService: BlogService, 
    private usersService: UsersService,
    private cdr: ChangeDetectorRef
  ) { }
  userInfo: any = {}
  @Input() posts: Posts;
  reportReaction: Reactions;
  reaction: Reactions;
  reactionsName: string[] = ['like', 'dislike'];
  reactionName: string;
  
  ngOnInit(){
    if(this.usersService.isLoggedIn()){
      this.userInfo = this.usersService.getUserInfo();
      this.blogService.getReactions(this.posts.id, this.userInfo.data.id, "report").subscribe({
        next: (reaction) => {
          this.reportReaction = reaction;
        },
        error: (error) => {
          console.error('Error fetching reactions:', error);
        }
      });
      for (let i in this.reactionsName){
        this.getLocalReaction(this.reactionsName[i]);
      }
    }
  }

  likeClick() {
    if(this.userInfo){
      if(this.reaction && this.reaction.type == "like"){
        this.deleteReaction("like")
      }else{
        this.addReaction("like");
        setTimeout(() => {
          this.getLocalReaction("like");
        }, 50);
      }
    }else{
      alert('You must be logged in to like a post');
    }
  }

  dislikeClick(){
    if(this.userInfo){
      if(this.reaction && this.reaction.type == "dislike"){
        this.deleteReaction("dislike")
      }else{
        this.addReaction("dislike");
        setTimeout(() => {
          this.getLocalReaction("dislike");
        }, 50);
      }
    }else{
      alert('You must be logged in to like a post');
    }
  }

  reportClick(){
    if(this.userInfo){
      this.blogService.addReaction(this.posts.id, this.userInfo.data.id, "report").subscribe({
        next: (result) => {
          this.refreshPostData();
        },
        error: (error) => {
          console.error('error adding like:', error);
        }
      });
    }else{
      alert('You must be logged in to report a post');
    }
  }
  
  getLocalReaction(type: string){
    this.blogService.getReactions(this.posts.id, this.userInfo.data.id, type).subscribe({
      next: (reaction) => {
        this.reaction=reaction;
      },
      error: (error) => {
        console.error('Error fetching reactions:', error);
      }
    });
  }

  refreshPostData() {
    this.blogService.getPostById(this.posts.id).subscribe({
      next: (updatedPost: Posts) => {
        this.posts = updatedPost;
      },
      error: (error) => {
        console.error('Error fetching post data:', error);
      }
    });
  }

  addReaction(type: string){
    if(this.userInfo){
      this.blogService.addReaction(this.posts.id, this.userInfo.data.id, type).subscribe({
        next: (result) => {
          this.refreshPostData();
        },
        error: (error) => {
          console.error('error adding like:', error);
        }
      });
    }else{
      alert('You must be logged in to like a post');
    }
  }

  profileClick(){
    this.usersService.getUserById(this.posts.user.id).subscribe({
      next: (profile) => {
        console.log('Profile:', profile)
        this.router.navigate(['/users/thisUser/{{profile.id}}']);
      },
      error: (error) => {
        console.error('Error fetching profile:', error);
      }
    });
  }

  deleteReaction(type: string){
    this.blogService.deleteReaction(this.posts.id, this.userInfo.data.id, type).subscribe({
      next: (result) => {
        this.refreshPostData();
      },
      error: (error) => {
        console.error('error deleting like:', error);
      }
    });
    this.reaction=null;
  }
}


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  @Input() message: post = {
    title: "",
    creatorname: "",
    creatoravatar: "",
    content: "",
    nbLike: 0,
    nbDislike: 0,
    nbComment: 0,
    nbReports: 0
  };

}

export interface post {
  title: string;
  creatorname: string;
  creatoravatar: string;
  content: string;
  nbLike:number;
  nbDislike:number;
  nbComment:number;
  nbReports:number
}

export interface comments {
  
}

export interface subjects {
  
}

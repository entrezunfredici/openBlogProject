import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  posts : post[] = [
    {
      title:"title",
      creatorname: "kévin",
      creatoravatar: "",
      content:"text",
      nbLike:0,
      nbDislike:0,
      nbComment:0,
      nbReports:0
    },
    {
      title:"title2",
      creatorname: "kévin",
      creatoravatar: "",
      content:"text2",
      nbLike:0,
      nbDislike:0,
      nbComment:0,
      nbReports:0
    }
  ]
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

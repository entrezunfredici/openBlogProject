import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})

export class BlogComponent implements OnInit {
  constructor(private BlogService :BlogService) { }
  ngOnInit(){
    this.BlogService.getPosts().subscribe({
      next: (posts) => {
      },
      error: (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    });
  }
}

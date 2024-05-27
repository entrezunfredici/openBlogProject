import { Component, Input } from '@angular/core';
import { postsSubject } from '../../model/postsSubjects.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrl: './subjects-list.component.scss'
})
export class SubjectsListComponent {
  @Input() number;
  constructor(private BlogService :BlogService) { }
  postSubjects: postsSubject[] = [];
  ngOnInit(){
    console.log(this.number)
    this.BlogService.getSubjects(this.number).subscribe({
      next: (postsSubject) => {
        this.postSubjects = postsSubject;
        console.log(this.postSubjects)
      },
      error: (error) => {
        console.error('Une erreur s\'est produite :', error);
      }
    });
  }

}

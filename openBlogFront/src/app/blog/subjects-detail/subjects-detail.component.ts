import { Component, Input } from '@angular/core';
import { postsSubject } from '../../model/postsSubjects.model'

@Component({
  selector: 'app-subjects-detail',
  templateUrl: './subjects-detail.component.html',
  styleUrl: './subjects-detail.component.scss'
})
export class SubjectsDetailComponent {
  @Input() postSubject: postsSubject; 
}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts/posts.component';
import { PostsWriterComponent } from './posts-writer/posts-writer.component';
import { PostListComponent } from './posts-list/post-list.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsDetailComponent } from './comments-detail/comments-detail.component';

import { BlogRoutingModule } from './blog-routing.module';

import { SidebarComponent } from '../sidebar/sidebar.component';
import { SubjectsListComponent } from './subjects-list/subjects-list.component';
import { SubjectsDetailComponent } from './subjects-detail/subjects-detail.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostsComponent,
    PostsWriterComponent,
    PostListComponent,
    CommentsListComponent,
    CommentsDetailComponent,
    SidebarComponent,
    SubjectsListComponent,
    SubjectsDetailComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    PostsWriterComponent,
    PostListComponent,
    PostsComponent
  ]
})
export class BlogModule { }

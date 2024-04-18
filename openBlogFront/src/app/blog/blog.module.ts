import { SidebarComponent } from './../sidebar/sidebar.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts/posts.component';
import { PostsWriterComponent } from './posts-writer/posts-writer.component';
import { PostListComponent } from './posts-list/post-list.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsDetailComponent } from './comments-detail/comments-detail.component';

import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [
    BlogComponent,
    PostsComponent,
    PostsWriterComponent,
    PostListComponent,
    CommentsListComponent,
    CommentsDetailComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    PostsWriterComponent,
    PostListComponent
  ]
})
export class BlogModule { }

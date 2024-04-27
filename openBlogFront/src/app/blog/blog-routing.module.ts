import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts-list/post-list.component';
import { PostsWriterComponent } from './posts-writer/posts-writer.component';

const routes: Routes = [
    {
        path: '',
        component: PostListComponent
    },
    {
        path: 'new',
        component: PostsWriterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BlogRoutingModule { }

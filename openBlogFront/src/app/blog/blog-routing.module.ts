import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts-list/post-list.component';
import { PostsWriterComponent } from './posts-writer/posts-writer.component';
import { AuthGuard } from '../users/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: PostListComponent
    },
    {
        path: 'new',
        component: PostsWriterComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class BlogRoutingModule { }

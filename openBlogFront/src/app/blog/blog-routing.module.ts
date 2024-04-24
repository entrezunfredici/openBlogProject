import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts-list/post-list.component';
import { PostsWriterComponent } from './posts-writer/posts-writer.component';
import { BlogComponent }  from './blog.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'posts', // Rediriger vers une route par défaut
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: BlogComponent,
        children: [
            {
                path: '',
                component: PostListComponent,
                outlet: 'blogrouter'
            },
            {
                path: 'new',
                component: PostsWriterComponent,
                outlet: 'blogrouter'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BlogRoutingModule { }

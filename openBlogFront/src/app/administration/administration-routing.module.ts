import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthGuard } from '../users/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ReportsListComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdministrationRoutingModule { }

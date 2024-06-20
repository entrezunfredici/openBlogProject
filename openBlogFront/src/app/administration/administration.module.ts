import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';

import { ReportsListComponent } from '../administration/reports-list/reports-list.component';
import { UsersListComponent } from '../administration/users-list/users-list.component';
import { ReportsComponent } from '../administration/reports/reports.component';
import { UsersComponent } from '../administration/users/users.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    ReportsListComponent,
    UsersListComponent,
    ReportsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule
  ]
})
export class AdministrationModule { }

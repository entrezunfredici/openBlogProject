import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AdministrationComponent,
    ReportsListComponent,
    UsersListComponent,
    ReportsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministrationModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LogInFormComponent
    },
    {
        path: 'register',
        component: RegisterFormComponent
    },
    {
        path: 'change_password',
        component: ChangePasswordFormComponent
    },
    {
        path: 'config',
        component: UserProfileFormComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class UsersRoutingModule { }

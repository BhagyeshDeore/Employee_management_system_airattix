import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { EngineerComponent } from './engineer/engineer.component';
import { TeamleadComponent } from './teamlead/teamlead.component';
import { ApplicationForLeaveComponent } from './application-for-leave/application-for-leave.component';
import { AuthGuard } from './auth.guard';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin-dashboard',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: { role: 'Admin' },
  },
  {
    path: 'register',
    component: RegisterationComponent,
  },
  {
    path: 'manager-dashboard',
    component: ManagerComponent,
    canActivate: [AuthGuard],
    data: { role: 'Manager' },
  },
  {
    path: 'engineer-dashboard',
    component: EngineerComponent,
    canActivate: [AuthGuard],
    data: { role: 'Engineer' },
  },
  {
    path: 'team-lead-dashboard',
    component: TeamleadComponent,
    canActivate: [AuthGuard],
    data: { role: 'Team Lead' },
  },
  {
    path: 'apply-for-leave',
    component: ApplicationForLeaveComponent,
  },
  {
    path : 'unauthorized',
    component : UnauthorisedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

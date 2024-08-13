import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { EngineerComponent } from './engineer/engineer.component';
import { TeamleadComponent } from './teamlead/teamlead.component';
import { ApplicationForLeaveComponent } from './application-for-leave/application-for-leave.component';

const routes: Routes = [
  {
    path: "",component : LoginComponent
  },
  {
    path: "login",component : LoginComponent
  },
  {
    path: "admin-dashboard",component : UserListComponent
  },
  {
    path : "register" , component : RegisterationComponent
  },
  {
    path : "manager-dashboard" ,component:ManagerComponent
  },
  {
    path : "engineer-dashboard",component: EngineerComponent
  },
  {
    path : "team-lead-dashboard" ,component:TeamleadComponent
  },
  {
    path : "apply-for-leave" , component : ApplicationForLeaveComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

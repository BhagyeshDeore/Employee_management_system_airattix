import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { EngineerComponent } from './engineer/engineer.component';
import { TeamleadComponent } from './teamlead/teamlead.component';
import { ManagerComponent } from './manager/manager.component';
import { ApplicationForLeaveComponent } from './application-for-leave/application-for-leave.component';
import { ManagerNavbarComponent } from './manager-navbar/manager-navbar.component';
import { EngineerNavbarComponent } from './engineer-navbar/engineer-navbar.component';
import { TeamLeadNavbarComponent } from './team-lead-navbar/team-lead-navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterationComponent,
    NavbarComponent,
    UserListComponent,
    UpdateUserComponent,
    LoginComponent,
    EngineerComponent,
    TeamleadComponent,
    ManagerComponent,
    ApplicationForLeaveComponent,
    ManagerNavbarComponent,
    EngineerNavbarComponent,
    TeamLeadNavbarComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from '../Service/user-service.service';
import { User } from '../User';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { LeaveDetailsDialogComponent } from '../leave-details-dialog/leave-details-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'status', 'update', 'remove', 'actions', 'leaveDetails'];

  constructor(private userService: UserServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '500px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.updateUser(user.id!, { ...result }).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }

  removeUser(user: User): void {
    const confirmation = confirm('Are you sure you want to delete this user?');
    if (confirmation) {
      this.userService.deleteUser(user.id!).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  toggleStatus(user: User): void {
    const newStatus = user.status === 'Active' ? 'Inactive' : 'Active';
    this.userService.updateUser(user.id!, { status: newStatus }).subscribe(() => {
      this.loadUsers(); 
    });
  }

  openLeaveDetails(userId: string): void {
    this.dialog.open(LeaveDetailsDialogComponent, {
      width: '600px',
      data: userId
    });
  }
  
}

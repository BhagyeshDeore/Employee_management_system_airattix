import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-leave-details-dialog',
  templateUrl: './leave-details-dialog.component.html',
  styleUrls: ['./leave-details-dialog.component.css']
})
export class LeaveDetailsDialogComponent implements OnInit {

  leaveDetails: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<LeaveDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userId: string,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.userService.getLeaveDetailsByUserId(this.userId).subscribe(data => {
      this.leaveDetails = data;
    });
  }
  
  updateStatus(leaveDetailId: string, status: string): void {
    this.userService.updateLeaveStatus(leaveDetailId, status).subscribe(() => {
      this.leaveDetails = this.leaveDetails.map(detail => 
        detail.id === leaveDetailId ? { ...detail, status } : detail
      );
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Service/user-service.service';

@Component({
  selector: 'app-teamlead',
  templateUrl: './teamlead.component.html',
  styleUrls: ['./teamlead.component.css']
})
export class TeamleadComponent implements OnInit {
  userProfile: any;
  leaveDetails: any[] = [];
  casualLeaveCount: number = 0;
  sickLeaveCount: number = 0;
  displayedColumns: string[] = ['leaveType', 'startDate', 'endDate', 'reason', 'status'];

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user.id;

    this.userService.getUser(userId).subscribe(profile => {
      this.userProfile = profile;
    });

    this.userService.getLeaveDetailsByUserId(userId).subscribe(details => {
      this.leaveDetails = details;
      this.updateLeaveCounts(details);
    });
  }

  updateLeaveCounts(leaveDetails: any[]): void {
    this.casualLeaveCount = leaveDetails.filter(detail => detail.leaveType === 'Casual Leave').length;
    this.sickLeaveCount = leaveDetails.filter(detail => detail.leaveType === 'Sick Leave').length;
  }
}

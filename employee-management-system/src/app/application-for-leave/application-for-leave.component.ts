import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../Service/user-service.service';
import { Router } from '@angular/router';
import { LeaveDetail } from '../User';

@Component({
  selector: 'app-application-for-leave',
  templateUrl: './application-for-leave.component.html',
  styleUrls: ['./application-for-leave.component.css']
})
export class ApplicationForLeaveComponent implements OnInit {
  leaveForm: FormGroup;
  userId: string | null = null;
  userName: string | null = null; 

  constructor(private userService: UserServiceService, private router: Router) {
    this.leaveForm = new FormGroup({
      leaveType: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userId = user.id;
    this.userName = user.name;

    if (!this.userId) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(): void {
    if (this.leaveForm.valid && this.userId) {
      const leaveData: LeaveDetail = {
        ...this.leaveForm.value,
        status: 'Pending',
        userId: this.userId,
        userName: this.userName 
      };

      this.userService.submitLeaveApplication(leaveData).subscribe({
        next: (response) => {
          console.log('Leave application submitted successfully', response);
          this.leaveForm.reset();
          const user = JSON.parse(localStorage.getItem('user') || '{}');
        const role = user.role;

        if (role === 'Admin') {
          this.router.navigate(['/admin-dashboard']);
        } else if (role === 'Engineer') {
          this.router.navigate(['/engineer-dashboard']);
        } else if (role === 'Team Lead') {
          this.router.navigate(['/teamlead-dashboard']);
        } else if (role === 'Manager') {
          this.router.navigate(['/manager-dashboard']);
        }
        },
        error: (error) => {
          console.error('Error submitting leave application', error);
        }
      });
    } else {
      console.log('Form is not valid or user ID is missing');
    }
  }
}

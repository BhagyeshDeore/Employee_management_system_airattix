import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorised',
  templateUrl: './unauthorised.component.html',
  styleUrls: ['./unauthorised.component.css']
})
export class UnauthorisedComponent {

  constructor(private router: Router) {}

  returnToDashboard(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    switch (user.role) {
      case 'Admin':
        this.router.navigate(['/admin-dashboard']);
        break;
      case 'Engineer':
        this.router.navigate(['/engineer-dashboard']);
        break;
      case 'Team Lead':
        this.router.navigate(['/teamlead-dashboard']);
        break;
      case 'Manager':
        this.router.navigate(['/manager-dashboard']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
}

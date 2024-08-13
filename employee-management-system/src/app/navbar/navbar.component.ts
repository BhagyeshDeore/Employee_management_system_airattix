// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userRole: string | null = null;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginService.userRole.subscribe(role => {
      this.userRole = role;
    });
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  getDashboardLink(): string {
    switch (this.userRole) {
      case 'Admin':
        return '/admin-dashboard';
      case 'Engineer':
        return '/engineer-dashboard';
      case 'Team Lead':
        return '/teamlead-dashboard';
      case 'Manager':
        return '/manager-dashboard';
      default:
        return '';
    }
  }
}

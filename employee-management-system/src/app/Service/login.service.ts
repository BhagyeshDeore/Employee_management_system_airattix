import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  userRole = this.userRoleSubject.asObservable();

  constructor() {
    this.loadUserRole();
  }

  private loadUserRole(): void {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      this.userRoleSubject.next(userData.role);
    } else {
      this.userRoleSubject.next(null);
    }
  }

  setUserRole(role: string): void {
    this.userRoleSubject.next(role);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userRoleSubject.next(null);
  }
}

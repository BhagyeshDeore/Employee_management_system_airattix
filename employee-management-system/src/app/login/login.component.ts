import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Service/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Service/login.service';  // Import LoginService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  });

  roles: string[] = ['Admin', 'Engineer', 'Team Lead', 'Manager'];

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private loginService: LoginService 
  ) {}

  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password, role } = this.loginForm.value;

      this.userService.getUsers().subscribe(users => {
        const user = users.find(u => u.email === email && u.password === password && u.role === role);

        if (user) {
          if (user.status === 'Active') {
            localStorage.setItem('user', JSON.stringify(user));
            console.log("executed---- localStorage.setItem('user', JSON.stringify(user));", JSON.stringify(user));

            
            this.loginService.setUserRole(user.role);

            if (user.role === 'Admin') {
              this.router.navigate(['/admin-dashboard']);
            } else if (user.role === 'Engineer') {
              this.router.navigate(['/engineer-dashboard']);
            } else if (user.role === 'Team Lead') {
              this.router.navigate(['/teamlead-dashboard']);
            } else if (user.role === 'Manager') {
              this.router.navigate(['/manager-dashboard']);
            }
          } else {
            alert('Your account is inactive. Please contact the admin.');
          }
        } else {
          alert('Invalid credentials or role.');
        }
      });
    }
  }
}

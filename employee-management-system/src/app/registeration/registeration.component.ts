import { Component } from '@angular/core';
import { UserServiceService } from '../Service/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../User'; // Import User interface
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {

  RegisterForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  });

  roles: string[] = ['Admin', 'Engineer',"Team Lead","Manager"]; 

  constructor(private userService: UserServiceService , public router : Router) {}

  onSubmit(): void {
    if (this.RegisterForm.valid) {
      const newUser: User = {
        name: this.RegisterForm.value.name!,
        email: this.RegisterForm.value.email!,
        password: this.RegisterForm.value.password!,
        role: this.RegisterForm.value.role!,
        status: "Inactive"
      };

      this.userService.registerUser(newUser).subscribe({
        next: (response) => {
          this.RegisterForm.reset();
          console.log('User registered successfully', response);
          this.router.navigate(["/"])
        },
        error: (error) => {
          console.error('Error registering user', error);
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }
}

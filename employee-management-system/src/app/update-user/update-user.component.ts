import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  updateForm: FormGroup;

  roles: string[] = ['Admin', 'Engineer', 'Team Lead', 'Manager'];

  constructor(
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.updateForm = new FormGroup({
      name: new FormControl(data.name, [Validators.required]),
      email: new FormControl(data.email, [Validators.required, Validators.email]),
      password: new FormControl(data.password, [Validators.required]),
      role: new FormControl(data.role, [Validators.required])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.updateForm.valid) {
      this.dialogRef.close({ ...this.updateForm.value, status: this.data.status });
    }
  }
}

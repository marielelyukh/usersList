import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from "../../service/users.service";
import {IUser} from "../../interfaces/iuser.interface";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  @Input() showForm: boolean = false
  @Output() onUserCreated = new EventEmitter<boolean>();
  types: string[] = ['ADMIN', 'DRIVER'];

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  public form = this.formBuilder.group({
    username: ['', [Validators.required]],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    user_type: ['', [Validators.required]]
  });

  private getFormData(): IUser {
    return {
      username: this.form.get('username')?.value || '',
      first_name: this.form.get('first_name')?.value || '',
      last_name: this.form.get('last_name')?.value || '',
      email: this.form.get('email')?.value || '',
      password: this.form.get('password')?.value || undefined,
      user_type: this.form.get('user_type')?.value || ''
    };
  }

  createUser(): void {
    if (this.form.invalid) {
      return
    }
    let formData = this.getFormData()

    this.userService.createUser(formData).subscribe(() => {
      this.onUserCreated.emit()

    }, error => {
      console.log('some error...')
    });
  }
}

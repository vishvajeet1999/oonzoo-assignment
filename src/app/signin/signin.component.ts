import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { emailValidator } from '../../directives/email-validator.directive';

interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  reactiveForm!: FormGroup;
  user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }

  

  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }

  public signin(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.reactiveForm.value;

    console.info('Email:', this.user.email);
    console.info('Password:', this.user.password);
  }

}



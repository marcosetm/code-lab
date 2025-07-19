import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {
  // login attributes
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // register attributes
  firstName: string = '';
  lastName: string = '';
  regEmail: string = '';
  regPassword: string = '';
  regConfirmPassword: string = '';
  dateOfBirth: string = '';

  constructor(private router: Router) {}

  onLogin(): void {
    console.log("onLogin()");
  }

  onRegister(): void {
    console.log("onRegister");
  }

}

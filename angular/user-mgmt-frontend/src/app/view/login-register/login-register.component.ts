import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequestDto } from '../../model/register-request.dto';
import { HttpErrorResponse } from '@angular/common/http';

// Service
import { AppStateService } from '../../service/app-state.service';
import { AuthService } from '../../service/auth.service';

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

  constructor(
    public appState: AppStateService, 
    private router: Router,
    private authService: AuthService) {}

  onLogin(): void {
    console.log("onLogin()");
  }

  onRegister(): void {
    const registerData: RegisterRequestDto = {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      email: this.regEmail,
      password: this.regPassword
    }

    this.authService.registerAccount(registerData).subscribe({
      next: (newAccount) => {
        this.router.navigate(['/account', newAccount.role, newAccount.id])
        console.log(`New account registered: ${newAccount}`);
      },
      error: (err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          this.errorMessage = `App error: ${err.error.message}`;
        } else {
          const defaultMsg = Array.isArray(err.error?.errors) && err.error.errors.length > 0 
            ? err.error.errors[0].defaultMessage
            : err.error?.message || err.message;

          if (defaultMsg.includes("Detail: Key (email)=")) {
            this.errorMessage = "An account already exists with that email."
          } else {
            this.errorMessage = `${defaultMsg}`;
          }
        }
      }
    });

  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRequestDto } from '../../model/register-request.dto';
import { HttpErrorResponse } from '@angular/common/http';

// Service
import { AppStateService } from '../../service/app-state.service';
import { AuthService } from '../../service/auth.service';
import { LoginRequestDto } from '../../model/login-request.dto';
import { extractErrorMessage } from '../../shared/utils/error.utils';
import { AccountResponseDto } from '../../model/account-response.dto';

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
    const loginData: LoginRequestDto = {
      email: this.email,
      password: this.password
    }

    this.authService.loginAccount(loginData).subscribe({
      next: (loggedInAccount) => {
        this.goToAccount(loggedInAccount);
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = extractErrorMessage(err);
      }
    })
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
        this.goToAccount(newAccount);
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = extractErrorMessage(err);
      }
    });
  }

  goToAccount(account: AccountResponseDto): void {
    this.authService.setSession(account);
    this.router.navigate(['/account']);
  }

}

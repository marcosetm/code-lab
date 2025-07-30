import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AccountResponseDto } from '../../model/account-response.dto';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UpdateRequestDto } from '../../model/update-request.dto';
import { UserService } from '../../service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { extractErrorMessage } from '../../shared/utils/error.utils';

@Component({
  selector: 'app-user-profile',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  profileForm!: FormGroup;
  account!: AccountResponseDto;
  errorMessage = "";
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
      this.profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthDate: ['', Validators.required],
        email: ['', Validators.required],
        password: [''],
        confirmPassword: ['']
      },
      {
        validators: this.updatePassValidator()
      });

      this.account = this.authService.getSessionAccount();
      this.loadForm();

  }
  loadForm(): void {
    if (this.account != null) {
        this.profileForm.patchValue(this.account);
      }
  }

  updatePassValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;

      if (!password && !confirmPassword) {
        return null;
      }

      if (password && !confirmPassword) {
        return { confirmPasswordRequired: true }
      }

      if (password !== confirmPassword) {
        return { passwordMismatch: true }
      }

      return null;

    };
  }

  onUpdate(): void {
    if (this.profileForm.invalid) return;
    
    const updateData: UpdateRequestDto = {
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      dateOfBirth: this.profileForm.value.birthDate,
      email: this.profileForm.value.email,
      password: this.profileForm.value.password || null,
      confirmPassword: this.profileForm.value.confirmPassword || null
    }

    this.userService.updateUser(this.account['id'], updateData).subscribe({
      next: (updatedAccount) => {
        this.account = updatedAccount;
        this.loadForm();
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = extractErrorMessage(err);
      }
    })
  }

  onDelete(): void {
    
    this.userService.deleteUser(this.account.id).subscribe({
      next: (isDeleted: any) => {
        this.onLogout();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    });
    
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountResponseDto } from '../../model/account-response.dto';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {

  profileForm!: FormGroup;
  account!: AccountResponseDto;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
      this.profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthDate: ['', Validators.required],
        email: ['', Validators.required]
      });

      this.account = this.authService.getSessionAccount();

      if (this.account != null) {
        this.profileForm.patchValue(this.account);
      }
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }
}

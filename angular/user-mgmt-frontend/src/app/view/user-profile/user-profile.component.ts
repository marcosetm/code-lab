import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { AccountResponseDto } from '../../model/account-response.dto';
import { CommonModule } from '@angular/common';

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
    private route: ActivatedRoute,
    private userService: UserService) {}

  ngOnInit(): void {
      this.profileForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        birthDate: ['', Validators.required],
        email: ['', Validators.required]
      });

      const id = this.route.snapshot.paramMap.get('id');

      if (id) {
        this.userService.getUserById(id).subscribe(account => {
          this.account = account;
          console.log(account);
          this.profileForm.patchValue(account);
        });
      }

  }



}

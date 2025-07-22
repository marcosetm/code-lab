import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES } from '../config/api-routes';
import { RegisterRequestDto } from '../model/register-request.dto';
import { Observable } from 'rxjs';
import { AccountResponseDto } from '../model/account-response.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerAccount(registerData: RegisterRequestDto): Observable<AccountResponseDto> {
    return this.http.post<AccountResponseDto>(API_ROUTES.CREATE_ACCOUNT, registerData);
  }

  loginAccount() {
    console.log(API_ROUTES.LOGIN)
  }

}

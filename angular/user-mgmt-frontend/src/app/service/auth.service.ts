import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES } from '../config/api-routes';
import { RegisterRequestDto } from '../model/register-request.dto';
import { Observable } from 'rxjs';
import { AccountResponseDto } from '../model/account-response.dto';
import { LoginRequestDto } from '../model/login-request.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = "usr-mgmt";

  constructor(private http: HttpClient) { }

  registerAccount(registerData: RegisterRequestDto): Observable<AccountResponseDto> {
    return this.http.post<AccountResponseDto>(API_ROUTES.CREATE_ACCOUNT, registerData);
  }

  loginAccount(loginData: LoginRequestDto): Observable<AccountResponseDto> {
    return this.http.post<AccountResponseDto>(API_ROUTES.LOGIN, loginData);
  }

  setSession(accountResposeDto: any): void {
    sessionStorage.setItem(this.tokenKey, JSON.stringify(accountResposeDto));
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem(this.tokenKey)
  }

  logout(): void { 
    sessionStorage.removeItem(this.tokenKey);
  }

}

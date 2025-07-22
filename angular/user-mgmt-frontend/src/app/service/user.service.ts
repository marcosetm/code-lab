import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountResponseDto } from '../model/account-response.dto';
import { API_ROUTES } from '../config/api-routes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<AccountResponseDto> {
    return this.http.get<AccountResponseDto>(`${API_ROUTES.GET_ACCT_BY_ID}/${id}`);
  }
}

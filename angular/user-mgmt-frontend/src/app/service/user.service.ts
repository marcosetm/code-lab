import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountResponseDto } from '../model/account-response.dto';
import { API_ROUTES } from '../config/api-routes';
import { UpdateRequestDto } from '../model/update-request.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id: string): Observable<AccountResponseDto> {
    return this.http.get<AccountResponseDto>(`${API_ROUTES.ACCOUNT}/${id}`);
  }

  updateUser(id: string, data: UpdateRequestDto): Observable<AccountResponseDto> {
    return this.http.patch<AccountResponseDto>(`${API_ROUTES.ACCOUNT}/${id}`, data);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${API_ROUTES.ACCOUNT}/${id}`);
  }
}

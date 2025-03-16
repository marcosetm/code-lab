import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../Task';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  deleteTask(id: Number): Observable<any> {
    return this.http.delete<Task>(`${this.url}/${id}`);
  }
  
}

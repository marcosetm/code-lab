import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { catchError, Observable } from 'rxjs';

const httpHeader = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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
    const deleteUrl: string = `${this.url}/${id}`;
    return this.http.delete<Task>(deleteUrl);
  }
  
  toggleReminder(task: Task): Observable<any> {
    const patchUrl: string = `${this.url}/${task.id}`;
    return this.http.put<Task>(patchUrl, task, httpHeader);
  }
}

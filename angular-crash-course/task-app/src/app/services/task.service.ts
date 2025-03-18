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

  deleteTask(task: Task): Observable<any> {
    const deleteUrl: string = `${this.url}/${task.id}`;
    return this.http.delete<Task>(deleteUrl);
  }
  
  toggleReminder(task: Task): Observable<any> {
    const putUrl: string = `${this.url}/${task.id}`;
    return this.http.put<Task>(putUrl, task, httpHeader);
  }

  addTasks(task: Task) {
    const postUrl: string = `${this.url}/post`;
    return this.http.post<Task>(this.url, task, httpHeader);
  }

}

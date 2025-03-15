import { Injectable } from '@angular/core';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://localhost:3000/tasks';

  async getTasks(): Promise<Task[]> {
    const data = await fetch(this.url)
    return (await data.json()) ?? [];
  }
}

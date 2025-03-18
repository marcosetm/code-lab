import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];
  private taskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    })
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (
          this.tasks = this.tasks.filter((t) => t.id !== task.id)
        )
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService
      .toggleReminder(task)
      .subscribe();
  }

  addTask(task: Task) {
    // const newId =  Math.floor(Math.random() * (9999 - 3 + 1)) + 3;
    // task.id = String(newId);
    this.taskService
      .addTasks(task)
      .subscribe((res) => { this.tasks.push(res) });
  }

}

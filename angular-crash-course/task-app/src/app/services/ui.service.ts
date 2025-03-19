import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTaks: boolean = false;
  private subject: Subject<any> = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTaks = !this.showAddTaks;
    this.subject.next(this.showAddTaks);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}

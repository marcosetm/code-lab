import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  appTitle: string = 'User Management MSA';

  constructor() { }
}

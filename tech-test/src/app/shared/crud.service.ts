import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../model/tasks';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  private baseUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<any> {

    return this.http.get(this.baseUrl);
  }

  addTask(task: Tasks) {
      this.http.post(this.baseUrl, task);
  }

  updateEmployee(id: number, task: any) {
    return this.http.patch(`${this.baseUrl}/${id}`, task);
  }
}

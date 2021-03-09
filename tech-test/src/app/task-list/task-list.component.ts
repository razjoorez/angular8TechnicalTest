import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../model/tasks';
import { CRUDService } from '../shared/crud.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  $tasks: Observable<Tasks[]>;
  constructor(private crud: CRUDService) {

  }
  ngOnInit(): void {
    this.$tasks = this.crud.getAllTasks();
  }
}

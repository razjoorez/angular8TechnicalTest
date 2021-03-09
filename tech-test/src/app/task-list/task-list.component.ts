import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private crud: CRUDService,
              private router: Router) {

  }
  ngOnInit(): void {
    this.$tasks = this.crud.getAllTasks();
  }

  goto() {
    this.router.navigate(['/Add']);
  }
}

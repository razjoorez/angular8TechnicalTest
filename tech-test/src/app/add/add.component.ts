import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from '../model/tasks';
import { CRUDService } from '../shared/crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  id: number;
  task: Tasks;
  tasks: Tasks[];
  max: number;
  maxIndex: number;
  i: number;
  constructor(private crud: CRUDService,
              private router: Router) { }

  ngOnInit() {
    this.crud.getAllTasks().subscribe(
      (data) => this.tasks = data
    );
  }

  save() {
    this.id = this.sort() + 1;
    this.task.id = this.id;
    this.crud.addTask(this.task);
  }

  sort() {
    if (this.tasks.length === 0) {
      return -1;
    }
    this.max = this.tasks[0].id;
    this.maxIndex = 0;
    for ( this.i = 0; this.i < this.tasks.length; this.i++) {
        if (this.tasks[this.i].id > this.max) {
          this.maxIndex = this.i;
          this.max = this.tasks[this.i].id;
        }
        return this.maxIndex;
    }
  }

  goto() {
    this.router.navigate(['/TaskList']);
  }

}

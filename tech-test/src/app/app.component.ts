import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from './model/tasks';
import { CRUDService } from './shared/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tech-test';
  $tasks: Observable<Tasks[]>;
  constructor(private crud: CRUDService) {

  }
  ngOnInit(): void {
    this.$tasks = this.crud.getAllTasks();
  }


}

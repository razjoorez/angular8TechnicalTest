import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from '../model/tasks';
import { CRUDService } from '../shared/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
id: number;
task: Tasks;
  constructor(private route: ActivatedRoute,
              private crud: CRUDService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

  edit() {
    this.crud.updateTask(this.id, this.task);
  }
}

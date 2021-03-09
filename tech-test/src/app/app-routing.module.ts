import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// tslint:disable-next-line:max-line-length
const routes: Routes = [{ path: 'TaskList', loadChildren: () => import('./task-list/task-list.module').then(m => m.TaskListModule) },
                        { path: 'Add', loadChildren: () => import('./add/add.module').then(m => m.AddModule) },
                        { path: 'Edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) },
                        { path: 'Delete', loadChildren: () => import('./delete/delete.module').then(m => m.DeleteModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

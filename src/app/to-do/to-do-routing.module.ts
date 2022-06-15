import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoItemComponent } from './component/to-do-item/to-do-item.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';

const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'list',component:ToDoListComponent},
  {path:'create',component:ToDoItemComponent},
  {path:'edit/:id',component:ToDoItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }

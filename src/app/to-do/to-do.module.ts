import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoItemComponent } from './component/to-do-item/to-do-item.component';
import { ToDoListComponent } from './component/to-do-list/to-do-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ToDoItemComponent,
    ToDoListComponent
  ],
  exports:[
    ToDoItemComponent,
    ToDoListComponent,

  ],

  imports: [
    CommonModule,
    ToDoRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class ToDoModule { }

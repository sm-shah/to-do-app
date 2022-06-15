import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToDoModule } from './to-do/to-do.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  imports:      [ BrowserModule, FormsModule,
  
  ToDoModule,
  RouterModule.forRoot([]),
  BrowserAnimationsModule,
  MatToolbarModule,MatButtonModule
],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],


  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

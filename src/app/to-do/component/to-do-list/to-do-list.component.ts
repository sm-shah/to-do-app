import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDoService } from '../../service/to-do.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
  
})
export class ToDoListComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Notes', 'Date','Edit'];
  dataSource = null;
  list: any[]=[];

  constructor(private router:Router,private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.dataSource = this.toDoService.getList();
  }
  ngOnDestroy(){
    this.dataSource  = [];
  }

  editItem(item){
    this.router.navigate([`/edit/${item.date}`])
  }

}

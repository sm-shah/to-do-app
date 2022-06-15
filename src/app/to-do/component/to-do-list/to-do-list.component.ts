import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDoService } from '../../service/to-do.service';

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
  
})
export class ToDoListComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Notes', 'Date','Edit'];
  dataSource = ELEMENT_DATA;
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

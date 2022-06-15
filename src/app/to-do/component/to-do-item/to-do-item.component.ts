import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../../service/to-do.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  ToDoForm:FormGroup;
  isSubmit:boolean =false;
  selectedToDo: any = null;
  list = []
  date: any = null ;
  constructor(private fb:FormBuilder,private toDoService: ToDoService,
    private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.route.params.subscribe(params=>{
       this.date = params['id'];
      if(this.date){
        this.list = this.toDoService.getList()
        this.selectedToDo =  this.list.find(x=>x.date == this.date);
        this.setFormValues()
      }
    });
  }

  setFormValues(){
    this.ToDoForm.get('title').setValue(this.selectedToDo?.title);
    this.ToDoForm.get('notes').setValue(this.selectedToDo?.notes);

  }

  createForm(){
    this.ToDoForm = this.fb.group({
      title:['',Validators.required],
      notes:['']
    })
  }

  saveTODOItem(){
    this.isSubmit = true;
    if(this.ToDoForm.invalid){
      return;
    }
    const todoOBJ = {
      title:this.ToDoForm.get('title').value,
      notes:this.ToDoForm.get('notes').value,
      date: Date.now()

    }
    if(this.date){
      this.selectedToDo.title = todoOBJ.title;
      this.selectedToDo.notes = todoOBJ.notes;
      this.selectedToDo.date = todoOBJ.date;

      this.toDoService.saveList(this.list);
    }else{
      this.toDoService.saveItem([todoOBJ]);
    }
    setTimeout(() => {
      this.router.navigate(['']); 
    });
  }
}

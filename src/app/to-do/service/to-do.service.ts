import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

  saveItem(item:any){
    let items = this.getList();
    if(!items){
      items = [];
    }
    items = items.concat(item);
    this.saveList(items);
  }

  getItem(date:any){
    const items = this.getList();
    return items.find(x=>x.date === date)
  }

  getList(){
   return JSON.parse(window.localStorage.getItem('list'));
  }

  saveList(items){
   window.localStorage.setItem('list',JSON.stringify(items));
   }
}

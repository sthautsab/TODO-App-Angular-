import { Component } from '@angular/core';
import { Todo } from '../Models/todo';
import {FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todo[] =[];

   todoForm = new FormGroup({
    todoTask : new FormControl(' ')
  });

  onSubmit(){
    const todoTaskValue = this.todoForm.get('todoTask')?.value as string;
    if(todoTaskValue !==""){
    this.todos.push({content: todoTaskValue, disabled: false});
    console.log(todoTaskValue)
  }
  console.log(this.todos)
   
    this.todoForm.patchValue({todoTask:""});
  };

  onRemove(i: number){
    // this.todos.splice(i, 1);
    this.todos = this.todos.filter((v, index) => index !==i);
  }

  toggleCompleted(i : number){
    // this.todos[i].disabled = !this.todos[i].disabled;
    this.todos.map((v, index) =>{
      if(index == i){
        v.disabled = !v.disabled;
      }
      return v;
    })

  }
}

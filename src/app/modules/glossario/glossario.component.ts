import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-glossario',
  templateUrl: './glossario.component.html',
  styleUrls: ['./glossario.component.css']
})
export class GlossarioComponent {
  
  public todos: Todo[] = []

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router
  ){
    this.form = this.fb.group({
      keyWord:["", Validators.required],
      description:["", Validators.required],
      created_at:["", Validators.required],
    })
    this.load()
  }

  add(){
    const keyWord = this.form.controls["keyWord"].value
    const description = this.form.controls["description"].value
    const created_at = this.date()
    const id = this.todos.length


    this.todos.push(new Todo(id, keyWord,description, created_at, ""))
    
    this.save()
    this.clear()

    this.route.navigate([""])
  }

  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem("todos", data)
  }

  cancell(){
    this.route.navigate([""])
  }

  load(){
    const data = localStorage.getItem("todos")
    this.todos = JSON.parse(data!)
    
  }

  clear(){
    this.form.reset()
  }

  date(){
    const data = new Date();

    const DD = String(data.getDate()).padStart(2,"0") //pega o dia
    const MM = String(data.getMonth() + 1).padStart(2,"0") //pega o mês
    const YY = data.getFullYear() //pega o ano

    const date = `${DD}/${MM}/${YY}`

    return date
  }
}

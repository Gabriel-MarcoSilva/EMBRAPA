import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-info-glossario',
  templateUrl: './info-glossario.component.html',
  styleUrls: ['./info-glossario.component.css']
})
export class InfoGlossarioComponent {

  @Input() meaning!: String

  public todos!: Todo[]

  constructor(){
    this.load()
  }

  load(){
    const data = localStorage.getItem("todos")
    this.todos = JSON.parse(data!)
  }

}

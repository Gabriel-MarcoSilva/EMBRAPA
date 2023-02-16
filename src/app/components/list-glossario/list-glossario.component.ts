import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-list-glossario',
  templateUrl: './list-glossario.component.html',
  styleUrls: ['./list-glossario.component.css']
})
export class ListGlossarioComponent {

  public todos: Todo[] = []

  public description!: String
  public i: any
  public quanti: number = 10
  public desable: Boolean = true

  constructor(){
    this.load()
  }


  load(){
    const data = localStorage.getItem("todos")
    this.todos = JSON.parse(data!)
    
  }
  
  aparecer( id: number){
 
    const info = document.querySelectorAll(".info-glossario")[id] as HTMLElement

    this.todos.map((item) =>{
      if(item.id === id){
        return this.description = item.description
      }else{
        return ""
      }
    })

    if(info.style.display == "none"){
      info.style.display = "flex"
    }else{
      info.style.display = "none"
    }
  }

  next(){
    this.quanti += 10
    if(this.quanti >= 10){
      this.desable = true;
    }else{
      this.desable = false
    }

    this.Desable()
  }

  back(){
    if(this.quanti === 10){
      this.desable = true;
    }else{
      this.desable = false
      this.quanti -= 10
    }
  }

  Desable(){
    return true
  }
}

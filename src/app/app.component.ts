import { Component } from '@angular/core';
import { Todo, TODOLIST } from './mocks/todo-list.moch'; // s'importe tout seul quand on écrit dans export class AppModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todoList: Todo[] = TODOLIST  //je créer une variable de type Todo (le type qu'on a créé dans le mock) et je lui donne comme valeur le tableau de mon mock
}

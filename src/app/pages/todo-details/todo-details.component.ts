import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TODOLIST } from 'src/app/mocks/todo-list.moch';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {

  // je créer une propriété todo
  todo?: Todo;
  // je récupère ma todolist
  todoList = TODOLIST;


  ngOnInit() {
    this.getTodo;
  }

  constructor(private activatedRoute: ActivatedRoute) {}

  // on créer une fonction pour récupérer une todo
  getTodo() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    const wantedTodo = this.todoList.find(todo => todo.id === id);
    //on fait un if pour les erreurs 404
    if(wantedTodo) {
      this.todo = wantedTodo;
    } else {
      console.log('bloop');
    }
  }

}

import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/mocks/todo-list.moch';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // je créer un input pour récupérer les données de mon parent (la c'est app component) et pour les mettre dans mon enfant (lr todocomponent)
    @Input() parentToChild! : Todo;  //je met un ! pour signifier qu'il faut qu'il y est quelque chose obligatoirement
}

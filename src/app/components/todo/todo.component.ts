import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/mocks/todo-list.moch';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    @Input() parentToChild! : Todo;
}

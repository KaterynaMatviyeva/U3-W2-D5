import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { iUser } from '../../interfaces/i-user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent implements OnInit {
  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  completedTodoArr: iUser[] = [];

  ngOnInit() {
    this.userSvc.getAllUsersWithTodos(this.todoSvc.todos);
    this.completedTodoArr = this.userSvc.users
      .map((user) => ({
        ...user,
        todos: user.todos?.filter((todo) => todo.completed) || [],
      }))
      .filter((user) => user.todos.length > 0);
  }
}

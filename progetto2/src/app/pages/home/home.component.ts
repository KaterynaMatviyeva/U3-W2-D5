import { iUser } from '../../interfaces/i-user';
import { TodoService } from '../../services/todo.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  todosAndUsersName: iUser[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.userSvc.getAllUsersWithTodos(this.todoSvc.todos);
    this.todosAndUsersName = this.userSvc.users;
  }

  searchUsers() {
    this.todosAndUsersName = this.userSvc.users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

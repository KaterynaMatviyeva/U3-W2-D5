import { Component } from '@angular/core';
import { iUser } from '../../interfaces/i-user';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  usersWithTodos: iUser[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.userSvc.getAllUsersWithTodos(this.todoSvc.todos);
    this.usersWithTodos = this.userSvc.users;
  }
  searchUsers() {
    this.usersWithTodos = this.userSvc.users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

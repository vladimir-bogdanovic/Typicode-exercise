import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../services/get-users.service';
import { TodoModelInterface } from '../types/todo-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css'],
})
export class UserTodosComponent implements OnInit {
  allTodos!: TodoModelInterface[];

  constructor(
    private getUsersService: GetUsersService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getUsersService
      .getTodos()
      .subscribe((resData: TodoModelInterface[]) => {
        this.allTodos = resData;
      });
  }

  handleCheckboxChange(todo: TodoModelInterface) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: TodoModelInterface) {
    this.http
      .delete('https://jsonplaceholder.typicode.com/posts/' + todo.id)
      .subscribe((data) => {
        console.log(data);
      });
  }

  createTodo() {}
}

import { Todo } from 'src/models/todo.model';

const { Injectable } = require('@nestjs/common');

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];

  create(todo: Todo): any {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }
}

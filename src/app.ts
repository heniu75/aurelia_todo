import { Todo } from './Todo';

export class App {
    heading : string;
    todos : Todo[];
    todoDescription : string;

    constructor() {
        this.heading = "Todos";
        this.todos = [];
        this.todoDescription = '';
    }

    addTodo() {
        if (this.todoDescription){
            this.todos.push(new Todo(this.todoDescription));
            this.todoDescription = '';
        }
    }

    removeTodo(todo){
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
}
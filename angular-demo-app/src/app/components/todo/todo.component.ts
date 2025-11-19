import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, CapitalizePipe, TimeAgoPipe, HighlightDirective],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  newTodoTitle = '';
  newTodoDescription = '';
  newTodoPriority: 'low' | 'medium' | 'high' = 'medium';

  todos: Todo[] = [
    {
      id: 1,
      title: 'Learn Angular 18',
      description: 'Study standalone components and new features',
      completed: false,
      priority: 'high',
      createdAt: new Date('2024-01-01')
    },
    {
      id: 2,
      title: 'Build Demo Project',
      description: 'Create comprehensive demo for presentation',
      completed: true,
      priority: 'medium',
      createdAt: new Date('2024-01-02')
    }
  ];

  filterType: 'all' | 'active' | 'completed' = 'all';

  get filteredTodos(): Todo[] {
    if (this.filterType === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filterType === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }
    return this.todos;
  }

  get completedTodos(): number {
    return this.todos.filter(todo => todo.completed).length;
  }

  trackByTodoId(index: number, todo: Todo): number {
    return todo.id;
  }

  onAddTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle,
        description: this.newTodoDescription,
        completed: false,
        priority: this.newTodoPriority,
        createdAt: new Date()
      };
      this.todos.push(newTodo);
      

      this.newTodoTitle = '';
      this.newTodoDescription = '';
      this.newTodoPriority = 'medium';
    }
  }

  onToggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  onDeleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}

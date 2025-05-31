import { Request, Response } from 'express';
import { todo } from 'node:test';

const todos = [
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: true },
  { id: 3, title: 'Todo 3', completed: false }
];

export class TodosController {
  public getTodos(req: Request, res: Response) {
    res.json(todos);
  }

  public getTodoById(req: Request, res: Response) {
    const todoId = +req.params.id; // Use unary plus to convert string to number
    
    if (isNaN(todoId)) {
      res.status(404).json({ error: 'Argument is not a number.' });
      return;
    } 
    
    const todo = todos.find(t => t.id === todoId);
    (todo) 
      ? res.json({ id: todoId, title: `Todo ${todoId}`, completed: false })
      : res.status(404).json({ error: 'Todo not found.' });    
  }

  public createTodo(req: Request, res: Response) {
    const { title, completed } = req.body;
    const id = Math.floor(Math.random() * 1000); // Simulate ID generation

    if( !title ) {
      res.status(400).json({ error: 'Title is required.' });
      return;
    }

    const newTodo = { id, title, completed: completed || false }; 

    todos.push(newTodo);
    res.status(201).json(newTodo);
  }

  public updateTodo(req: Request, res: Response) {
    const id = +req.params.id;
    if (isNaN(id)) {
      res.status(404).json({ error: 'Argument is not a number.' });
      return;
    }
    const todo = todos.find(t => t.id === id);
    if (!todo) {
      res.status(404).json({ error: 'Todo not found.' });
      return;
    }
    const { title, completed } = req.body;
    todo.title = title || todo.title;

    todo.completed = completed !== undefined ? completed : todo.completed;
    res.json(todo);
  }

  public deleteTodo(req: Request, res: Response) {
    const id = +req.params.id;
    if (isNaN(id)) {
      res.status(404).json({ error: 'Argument is not a number.' });
      return;
    }
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
      res.status(404).json({ error: 'Todo not found.' });
      return;
    }
    todos.splice(index, 1);
    res.status(204).send(); // No content
  }
}
// src/controllers/crmController.ts
import * as mongoose from 'mongoose';
import { TodoSchema } from '../models/todoModel';
import { Request, Response } from 'express';
// Create model schema
const Todo = mongoose.model('Todo', TodoSchema);
// TodoController
export class TodoController {
    // Use the express objects
    // add a new todo
    public addNewTodo(req: Request, res: Response) {
        // Create a new todo
        let newTodo = new Todo(req.body);
        // Save todo
        newTodo.save((err, todo) => {
            if (err) {
                // If error saving -> send the cause
                res.send(err);
            }
            // Else send back the inserted record
            res.json(todo);
        });
    }
    // Get all todos
    public getTodos(req: Request, res: Response) {
        Todo.find({}, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }
    // Get specific todo
    public getContactWithID(req: Request, res: Response) {
        Todo.findById(req.params.id, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }
    // Update a todo
    public updateTodo(req: Request, res: Response) {
        Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }
    // Delete a todo
    public deleteContact (req: Request, res: Response) {
        Todo.deleteOne({ _id: req.params.id }, (err, todo) => {
            if(err){
                res.send(err);
            }
            res.json(todo);
        });
    }
}

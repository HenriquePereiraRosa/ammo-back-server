import { Request, Response } from "express";
import { Application } from "express";
import { TodoController } from "../controllers/todoController"
// Routes - define the app routes
export class Routes {
    // Todo Controller
    public todoController: TodoController = new TodoController();
    public routes(app: Application): void {
        // ToDo's
        app.route('/todo')
            // GET endpoint
            .get(this.todoController.getTodos)
            // POST endpoint
            .post(this.todoController.addNewTodo);
        // ToDo get, put and delete a specific todo
        app.route('/todo/:id')
            // get specific todo
            .get(this.todoController.getContactWithID)
            // PUT endpoint
            .put(this.todoController.updateTodo)
            // DELETE endpoint
            .delete(this.todoController.deleteContact);        
    }
}
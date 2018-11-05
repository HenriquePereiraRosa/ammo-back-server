import { Request, Response } from "express";
import { Application } from "express";
import { ResourceController } from "../controllers/resourceController"
// Routes - define the app routes
export class Routes {
    // Resource Controller
    public resourceController: ResourceController = new ResourceController();
    public routes(app: Application): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET response. Express working...'
                });
                this.resourceController.addNewResource;
            });

        // Resource's
        app.route('/resource')
            // GET endpoint
            .get(this.resourceController.getResources)
            // POST endpoint
            .post(this.resourceController.addNewResource)

        // ToDo get, put and delete a specific resource
        app.route('/resource/:id')
            // get specific resource
            .get(this.resourceController.getContactWithID)
            // PUT endpoint
            .put(this.resourceController.updateResource)
            // DELETE endpoint
            .delete(this.resourceController.deleteContact);

        // ToDo get resources that matches
        app.route('/search')
            // get specific resource
            .get(this.resourceController.findResources);
    }
}
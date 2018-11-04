// src/controllers/crmController.ts
import * as mongoose from 'mongoose';
import { ResourceSchema } from '../models/resourceModel';
import { Request, Response } from 'express';
// Create model schema
const Resource = mongoose.model('Resource', ResourceSchema);
// ResourceController
export class ResourceController {
    // Use the express objects
    // add a new resource
    public addNewResource(req: Request, res: Response) {
        // Create a new resource
        let newResource = new Resource(req.body);
        // Save resource
        newResource.save((err, resource) => {
            if (err) {
                // If error saving -> send the cause
                res.send(err);
            }
            // Else send back the inserted record
            res.json(resource);
        });
    }
    // Get all resources
    public getResources(req: Request, res: Response) {
        Resource.find({}, (err, resource) => {
            if (err) {
                res.send(err);
            }
            res.json(resource);
        });
    }
    // Find all that matches
    public findResources(req: Request, res: Response) {
        Resource.find({}, (err, resource) => {
            if (err) {
                res.send(err);
            }
            res.json(resource);
        });
    }
    // Get specific resource
    public getContactWithID(req: Request, res: Response) {
        Resource.findById(req.params.id, (err, resource) => {
            if (err) {
                res.send(err);
            }
            res.json(resource);
        });
    }
    // Update a resource
    public updateResource(req: Request, res: Response) {
        Resource.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, resource) => {
            if (err) {
                res.send(err);
            }
            res.json(resource);
        });
    }
    // Delete a resource
    public deleteContact (req: Request, res: Response) {
        Resource.deleteOne({ _id: req.params.id }, (err, resource) => {
            if(err){
                res.send(err);
            }
            res.json(resource);
        });
    }
}

// src/app.ts
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/apiRoutes";
import * as mongoose from "mongoose";
import * as cors from "cors";
// App class
class App {
    // URL do MongoDB
    public mongoUrl: string = 'mongodb://localhost/ToDodb';
    // app is the object of express app
    public app: express.Application;
    // routes object
    public routes: Routes = new Routes();
    // the constructor
    public constructor() {
        // instantiate (but not run!) the application
        this.app = express();
        // configure it
        this.config();
        // associate with the app
        this.routes.routes(this.app);
        // configure MongoDB
        this.mongoSetup();
    }
    // to configure the app
    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // enable all CORS requests
        this.app.use(cors());
    }
    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
// export a new App object
// default is a keyword of ES6 -> avoid {} in import
export default new App().app;

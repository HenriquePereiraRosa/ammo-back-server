// src/app.ts
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/apiRoutes';
import * as mongoose from './../node_modules/mongoose';
import * as cors from 'cors';
import { env } from './environments/environment';

// App class
class App {
    // URL do MongoDB
    public mongoUrl: string = 'mongodb://admin:password8@ds149593.mlab.com:49593/mongdb-ammo-test';
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
        mongoose.set('useFindAndModify', true);
        mongoose.set('useCreateIndex', true);
        (async function () {
            try {
                const client = await mongoose.connect(env.mongoUrl, {
                    auth: {
                        user: env.MONGO_DB_USER,
                        password: env.MONGO_DB_PASSWORD
                    },
                    useNewUrlParser: true });
                
                // DEBUG:
                console.log('Connected!');
                // ... anything          
                // client.close();
            } catch (e) {
                console.error(e)
            }
        })()
    }
}
// export a new App object
// default is a keyword of ES6 -> avoid {} in import
export default new App().app;

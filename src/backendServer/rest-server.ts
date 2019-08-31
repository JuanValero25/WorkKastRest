import express from 'express';
import ConfigLoader from "../configloader/ConfigLoader";
import {createConnection} from "typeorm";
import Router from "./router";

export class RestServer {
    public static readonly PORT: number = 8080;
    private app: express.Application;
    private port: string | number;
    private configs = ConfigLoader.getConfigsByEnv();

    constructor() {
        this.createApp();
        this.connectToMongoDb();
    }

    public getApp(): express.Application {
        return this.app;
    }
    // this init typeORm connection
    public connectToMongoDb(): void {
        createConnection({
            type: "mongodb",
            host: this.configs.host,
            port: this.configs.port,
            database: this.configs.database,
            entities: [
                __dirname + "/model/*.*"
            ],
        }).then((connection) => {
            this.initRoutes();
            console.log("server init");
        });
    }

    private createApp(): void {
        this.app = express();
        this.port = process.env.PORT || RestServer.PORT;
    }

    private initRoutes(): void {
        const router = new Router(this.app);
        this.app.listen(this.port, () => {
            console.log("Server started on localhost:" + this.port);
        });
    }

}

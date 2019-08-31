import {Request, Response} from 'express';
import ConfigLoader from "../../configloader/ConfigLoader";

export const authTokenMiddleware = (request: Request, response: Response, next: any) => {

    const token = request.headers.authorization;
    const localToken = ConfigLoader.getConfigsByEnv().token;
    if (!token || token !== localToken) {
        throw new Error("bad token");
    }
    next();
};

export const errorMiddleware = (err: any, request: Request, response: Response, next: any) => {
    if (err) {
        response.status(400).send({error: err.message});
    }

};

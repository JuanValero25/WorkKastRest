import express, {Application, Request, Response} from 'express';
import * as bodyParser from 'body-parser';
import ArticleService from "./services/articleService";
import UserService from "./services/userService";
import {User} from "./model/User";
import {Article} from "./model/Article";
import * as path from "path";
import {authTokenMiddleware, errorMiddleware} from "./middleware/authMiddleWare";

export default class Router {
    private readonly userRootPath = '/user';
    private readonly articleRootPath = '/article';
    private articleService: ArticleService;
    private userService: UserService;

    constructor(private app: Application) {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use(authTokenMiddleware);
        this.app.use(errorMiddleware);
        this.articleService = new ArticleService();
        this.userService = new UserService();
        this.initRoutes();
    }

    private initRoutes() {
        this.app.post(this.userRootPath, async (request: Request, response: Response) => {
            let user = Object.assign(new User(), request.body);
            user = await this.userService.saveUser(user);
            response.send(user);
        });

        this.app.post(this.articleRootPath, async (request: Request, response: Response) => {
            let article = request.body as Article;
            article = await this.articleService.saveArticle(article);
            response.send(article);
        });
        this.app.put(this.articleRootPath, async (request: Request, response: Response) => {
            const article = request.body as Article;
            await this.articleService.editArticle(article);
            response.send("update OK");
        });

        this.app.delete(this.articleRootPath, async (request: Request, response: Response) => {
            const article = request.body as Article;
            await this.articleService.removeArticle(article);
            response.send("remove OK");
        });

        this.app.post(this.articleRootPath + '/getAll', async (request: Request, response: Response) => {
            const article = request.body.tags as string[];
            const respon = await this.articleService.getArticleByTags(article);
            response.send(respon);
        });

    }

}

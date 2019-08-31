import {getMongoRepository, MongoRepository} from "typeorm";
import {Article} from "../model/Article";

export default class UserRepository {

    private mongoManager: MongoRepository<Article>;

    constructor() {
        this.mongoManager = getMongoRepository(Article);
    }

    public async saveArticle(article: Article): Promise<Article> {
        return await this.mongoManager.save(article);
    }

    public async editArticle(article: Article): Promise<Article> {
        const response = await this.mongoManager.update(article.id, article);
        return response.raw;
    }

    public async removeArticle(article: Article): Promise<Article> {
        return await this.mongoManager.remove(article);
    }

    public async getArticleByTags(tags: string[]): Promise<Article[]> {
        return await this.mongoManager.find({where: {tags: {$all: tags}}});
    }
}

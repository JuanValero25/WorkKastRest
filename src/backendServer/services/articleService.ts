import ArticleRepository from "../repository/ArticleRepository";
import {Article} from "../model/Article";

export default class ArticleService {

    private articleRepository = new ArticleRepository();

    public async saveArticle(article: Article): Promise<Article> {
        return await this.articleRepository.saveArticle(article);
    }

    public async editArticle(article: Article): Promise<Article> {
        return await this.articleRepository.editArticle(article);
    }

    public async removeArticle(article: Article): Promise<Article> {
        return await this.articleRepository.removeArticle(article);
    }

    public async getArticleByTags(tags: string[]): Promise<Article[]> {
        return await this.articleRepository.getArticleByTags(tags);
    }

}

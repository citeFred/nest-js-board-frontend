import { ArticleResponseData } from "./article-response-data.interface";

export interface ArticlePaginatedResponse {
    articles: ArticleResponseData[];
    totalCount: number;
}
import { ArticleWithUserResponseData } from "./article-with-user-response-data.interface";

export interface ArticlePaginatedResponse {
    articles: ArticleWithUserResponseData[];
    totalCount: number;
}
export interface ArticleWithUserResponseData {
    id: number;
    title: string;
    contents: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        id: number;
        username: string;
        //...
    };
}
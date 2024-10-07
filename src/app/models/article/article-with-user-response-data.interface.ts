export interface ArticleWithUserResponseData {
    id: number;
    title: string;
    contents: string;
    createdAt: Date;
    updatedAt: Date;
    author: {
        id: number;
        username: string;
        //...
    };
}
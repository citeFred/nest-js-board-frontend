export interface ArticleWithAttachmentAndUserResponseData {
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
    attachments: {
        id: number;
        filename: string;
        url: string;
        //...
    }[];
}
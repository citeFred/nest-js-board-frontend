import { FileType } from "./file-type.enum";

export interface FileResponseData {
    id: number;
    filename: string;
    mimetype: string;
    path: string;
    size: number;
    fileType: FileType;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}
import { FileResponseData } from "../file/file-response-data.interface";
import { UserRole } from "./user-role.enum";

export interface UserWithFilesResponseData {
    id: number;
    username: string;
    email: string;
    role: UserRole;
    postalCode: string;
    address: string;
    detailAddress: string;
    files: FileResponseData[];
}
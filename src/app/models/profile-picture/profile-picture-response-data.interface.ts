import { ProfilePictureType } from "./profile-picture-type.enum";

export interface ProfilePictureResponseData {
    id: number;
    filename: string;
    mimetype: string;
    path: string;
    size: number;
    profilePictureType: ProfilePictureType;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}
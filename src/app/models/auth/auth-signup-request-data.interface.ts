import { UserRole } from "../common/user-role.enum";

export interface SignUpRequestData {
    username: string;
    password: string;
    email: string;
    role: UserRole;
    postalCode: string;
    address: string;
    detailAddress: string;
  }
export interface AuthResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data?: any; // 로그인 시, 추가 데이터가 있을 수 있음
}
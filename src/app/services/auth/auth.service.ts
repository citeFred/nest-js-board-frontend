import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { SignInRequestData } from '../../models/auth/auth-signin-request-data.interface';
import { AuthResponse } from '../../models/auth/auth-response.interface';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = 'http://localhost:3000/api/auth'; // 로컬 테스트용
  // private apiUrl = 'http://43.200.247.144:3000/api/auth'; // EC2 연결용
  private apiUrl = 'https://api.boardapp.site:3001/api/auth'; // HTTPS 주소로 변경

  constructor(private http: HttpClient) { }

  signUp(formData: FormData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signup`, formData, { withCredentials: true });
  }

  signIn(signInRequestData: SignInRequestData): Observable<AuthResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<AuthResponse>(`${this.apiUrl}/signin`, signInRequestData, { headers, withCredentials: true, observe: 'response' }).pipe(
        tap(response => {
            // JWT를 Authorization 헤더에서 추출하여 로컬 스토리지에 저장
            const jwtToken = response.headers.get('Authorization')?.split(' ')[1];
            console.log("get"+jwtToken)

            if (jwtToken) {
                localStorage.setItem('jwtToken', jwtToken);
                console.log("saved"+jwtToken)
            }
        }),
        map(response => {
            // response.body가 null이 아닐 때만 반환
            if (response.body) {
                return response.body; // AuthResponse 반환
            }
            throw new Error('Response body is null'); // null인 경우 예외 처리
        })
    );
}



  getUserIdFromToken(): number | null {
    const token = this.getCookie('Authorization');
    console.log("token:"+ token)
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.userId;
    }
    return null;
  }

  getUserRoleFromToken(): string | null {
    const token = this.getCookie('Authorization');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role || null;
    }
    return null;
  }
  
  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    console.log("document.cookie:"+ value)

    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(';').shift();
      return cookieValue ? cookieValue : null;
    }
    return null;
  }

  isLoggedIn(): boolean {
    const token = this.getCookie('Authorization');
    return !!token;
  }

  getUserProfilePictureFromToken(): string | null {
    const token = this.getCookie('Authorization');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.profilePictureUrl || null; // 프로필 사진 URL 반환
    }
    return null;
  }
}

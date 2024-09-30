import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInRequestData } from '../../models/auth/auth-signin-request-data.interface';
import { AuthResponse } from '../../models/auth/auth-response.interface';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  signUp(formData: FormData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signup`, formData, { withCredentials: true });
  }

  signIn(signInRequestData: SignInRequestData): Observable<AuthResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AuthResponse>(`${this.apiUrl}/signin`, signInRequestData, { headers, withCredentials: true });
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

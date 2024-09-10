import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInRequestData } from '../models/auth/auth-signin-request-data.interface';
import { SignUpRequestData } from '../models/auth/auth-signup-request-data.interface';
import { AuthResponse } from '../models/auth/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  signUp(signUpRequestData: SignUpRequestData): Observable<AuthResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AuthResponse>(`${this.apiUrl}/signup`, signUpRequestData, { headers, withCredentials: true });
  }

  signIn(signInRequestData: SignInRequestData): Observable<AuthResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AuthResponse>(`${this.apiUrl}/signin`, signInRequestData, { headers, withCredentials: true });
  }
}

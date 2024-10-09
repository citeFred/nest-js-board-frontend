import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/common/api-response.interface';
import { UserWithProfilePictureResponseData } from 'src/app/models/user/user-with-profile-picture-response-data.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = 'http://localhost:3000/api/users'; // 로컬 테스트용
  private apiUrl = 'http://43.200.247.144:3000/api/users'; // EC2 연결용

  constructor(private http: HttpClient) { }

  getUserProfileById(id: number): Observable<ApiResponse<UserWithProfilePictureResponseData>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<ApiResponse<UserWithProfilePictureResponseData>>(`${this.apiUrl}/${id}`, { headers, withCredentials: true });
  }

  updateUser(id: number, formData: FormData): Observable<ApiResponse<UserWithProfilePictureResponseData>> {
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.put<ApiResponse<UserWithProfilePictureResponseData>>(`${this.apiUrl}/${id}`, formData, { headers, withCredentials: true });
  }

  deleteUser(id: number): Observable<ApiResponse<void>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`, { headers, withCredentials: true });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/common/api-response.interface';
import { UserWithFilesResponseData } from 'src/app/models/user/user-with-file-response-data.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUserProfileById(id: number): Observable<ApiResponse<UserWithFilesResponseData>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<ApiResponse<UserWithFilesResponseData>>(`${this.apiUrl}/${id}`, { headers, withCredentials: true });
  }
}

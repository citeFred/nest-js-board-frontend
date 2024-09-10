import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common/api-response.interface';
import { ArticleResponseData } from '../models/article/article-response-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api'; // 실제 API URL로 변경

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<ApiResponse<ArticleResponseData[]>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<ApiResponse<ArticleResponseData[]>>(`${this.apiUrl}/articles`, { headers, withCredentials: true });
  }

  getArticleById(id: number): Observable<ApiResponse<ArticleResponseData>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<ApiResponse<ArticleResponseData>>(`${this.apiUrl}/articles/${id}`, { headers, withCredentials: true });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/common/api-response.interface';
import { ArticleResponseData } from '../../models/article/article-response-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<ApiResponse<ArticleResponseData[]>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<ApiResponse<ArticleResponseData[]>>(`${this.apiUrl}`, { headers, withCredentials: true });
  }

  getArticleById(id: number): Observable<ApiResponse<ArticleResponseData>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<ApiResponse<ArticleResponseData>>(`${this.apiUrl}/${id}`, { headers, withCredentials: true });
  }

  writeArticle(formData: FormData): Observable<ApiResponse<ArticleResponseData>> {
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.post<ApiResponse<ArticleResponseData>>(`${this.apiUrl}`, formData, { headers, withCredentials: true });
  }
}

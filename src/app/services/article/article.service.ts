import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/common/api-response.interface';
import { ArticleWithAttachmentAndUserResponseData } from '../../models/article/article-with-attachment-user-response-data.interface';
import { ArticlePaginatedResponse } from 'src/app/models/article/article-paginated-response-data.interface';
import { ArticleWithUserResponseData } from 'src/app/models/article/article-with-user-response-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // private apiUrl = 'http://localhost:3000/api/articles'; // 로컬 테스트용
  // private apiUrl = 'http://43.200.247.144:3000/api/articles'; // EC2 연결용
  private apiUrl = 'https://api.boardapp.site:3001/api/articles'; // HTTPS 주소로 변경

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<ApiResponse<ArticleWithUserResponseData[]>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<ApiResponse<ArticleWithUserResponseData[]>>(`${this.apiUrl}`, { headers, withCredentials: true });
  }

  getPaginatedArticles(page: number, limit: number): Observable<ApiResponse<ArticlePaginatedResponse>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<ApiResponse<ArticlePaginatedResponse>>(`${this.apiUrl}/paginated?page=${page}&limit=${limit}`, { headers, withCredentials: true });
  }

  getArticleById(id: number): Observable<ApiResponse<ArticleWithAttachmentAndUserResponseData>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<ApiResponse<ArticleWithAttachmentAndUserResponseData>>(`${this.apiUrl}/${id}`, { headers, withCredentials: true });
  }

  writeArticle(formData: FormData): Observable<ApiResponse<ArticleWithAttachmentAndUserResponseData>> {
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.post<ApiResponse<ArticleWithAttachmentAndUserResponseData>>(`${this.apiUrl}`, formData, { headers, withCredentials: true });
  }

  updateArticle(id: number, formData: FormData): Observable<ApiResponse<ArticleWithAttachmentAndUserResponseData>> {
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.http.put<ApiResponse<ArticleWithAttachmentAndUserResponseData>>(`${this.apiUrl}/${id}`, formData, { headers, withCredentials: true });
  }

  deleteArticle(id: number): Observable<ApiResponse<void>> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`, { headers, withCredentials: true });
  }
}

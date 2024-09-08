// article.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Article {
  id: number;
  title: string;
  contents: string;
  // 기타 필요한 필드
}

interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api'; // 실제 API URL로 변경

  constructor(private http: HttpClient) {}

  getAllArticles(): Observable<ApiResponse<Article[]>> {
    return this.http.get<ApiResponse<Article[]>>(`${this.apiUrl}/articles`);
  }

  getArticleById(id: number): Observable<ApiResponse<Article>> {
    return this.http.get<ApiResponse<Article>>(`${this.apiUrl}/articles/${id}`); // 수정
  }
  
}

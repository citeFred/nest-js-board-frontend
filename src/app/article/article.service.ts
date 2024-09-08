// article.service.ts
import { Injectable } from '@angular/core';

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

  async getAllArticles(): Promise<ApiResponse<Article[]>> {
    try {
      const response = await fetch(`${this.apiUrl}/articles`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse<Article[]> = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

  async getArticleById(id: number): Promise<ApiResponse<Article>> {
    try {
      const response = await fetch(`${this.apiUrl}/articles/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse<Article> = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
}

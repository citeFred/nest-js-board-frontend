import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Router 추가
import { Article, ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.page.html',
  styleUrls: ['./article-list.page.scss'],
})
export class ArticleListPage implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) {} // Router 주입

  async ngOnInit() {
    try {
      const response = await this.articleService.getAllArticles();
      if (response.success) {
        this.articles = response.data;
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  viewArticle(id: number) {
    // 상세 페이지로 이동 (예: article-detail 페이지로 이동)
    this.router.navigate(['/article-detail', id]);
  }
}

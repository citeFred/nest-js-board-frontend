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

  ngOnInit() {
    this.articleService.getAllArticles().subscribe(response => {
      console.log(this.articles)
      console.log(response)
      if (response.success) {
        this.articles = response.data;
        console.log(this.articles)

      } else {
        console.error(response.message);
        console.log(this.articles)

      }
    });
  }

  viewArticle(id: number) {
    // 상세 페이지로 이동 (예: article-detail 페이지로 이동)
    this.router.navigate(['/article-detail', id]);
  }
}

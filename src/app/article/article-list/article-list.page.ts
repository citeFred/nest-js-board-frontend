import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { ArticleResponseData } from 'src/app/models/article/article-response-data.interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.page.html',
  styleUrls: ['./article-list.page.scss'],
})
export class ArticleListPage implements OnInit {
  articles: ArticleResponseData[] = [];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.articleService.getAllArticles().subscribe({
      next: response => {
        if (response.success) {
          this.articles = response.data;
        } else {
          console.error(response.message);
        }
      },
      error: err => {
        console.error('Error fetching articles:', err);
      }
    });
  }

  viewArticle(id: number) {
    this.router.navigate(['/article-list/detail', id]);
  }
}

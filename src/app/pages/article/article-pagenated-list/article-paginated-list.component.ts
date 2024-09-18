import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/article/article.service';
import { ArticleWithUserResponseData } from 'src/app/models/article/article-with-user-response-data.interface';

@Component({
  selector: 'app-article-paginated-list',
  templateUrl: './article-paginated-list.component.html',
  styleUrls: ['./article-paginated-list.component.scss'],
})
export class ArticlePaginatedListComponent implements OnInit {
  articles: ArticleWithUserResponseData[] = [];
  currentPage: number = 1;
  limit: number = 10;
  totalPages: number = 0;
  totalCount: number = 0;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.loadPaginatedArticles();
  }

  loadPaginatedArticles() {
    this.articleService.getPaginatedArticles(this.currentPage, this.limit).subscribe({
      next: response => {
        if (response.success) {
          this.articles = response.data.articles;
          this.totalCount = response.data.totalCount;
          this.totalPages = Math.ceil(this.totalCount / this.limit);
        } else {
          console.error(response.message);
        }
      },
      error: err => {
        console.error('Error fetching paginated articles:', err);
      },
      complete: () => {
        console.log('Fetching paginated articles request completed.');
      }
    });
  }

  viewArticle(id: number) {
    this.router.navigate(['/articles/detail', id]);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadPaginatedArticles();
  }
}

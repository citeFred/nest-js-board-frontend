import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/article/article.service';
import { ArticleWithUserResponseData } from 'src/app/models/article/article-with-user-response-data.interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: ArticleWithUserResponseData[] = [];

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
      },
      complete: () => {
        console.log('Fetching articles request completed.');
      }
    });
  }

  viewArticle(id: number) {
    this.router.navigate(['/articles/detail', id]);
  }
}

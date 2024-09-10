import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { ArticleResponseData } from 'src/app/models/article/article-response-data.interface';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article: ArticleResponseData | undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.loadArticle();
  }

  loadArticle() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getArticleById(+id).subscribe({
        next: response => {
          if (response.success) {
            this.article = response.data;
          } else {
            console.error(response.message);
          }
        },
        error: err => {
          console.error('Error fetching article:', err);
        }
      });
    } else {
      console.error('Article ID is null');
    }
  }
}

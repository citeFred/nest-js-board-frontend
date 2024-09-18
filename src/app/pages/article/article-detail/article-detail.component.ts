import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article/article.service';
import { ArticleWithAttachmentAndUserResponseData } from 'src/app/models/article/article-with-attachment-user-response-data.interface';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article: ArticleWithAttachmentAndUserResponseData | undefined;

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
        },
        complete: () => {
          console.log('Fetching an article request completed.');
        }
      });
    } else {
      console.error('Article ID is null');
    }
  }
}

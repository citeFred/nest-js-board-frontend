import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  async ngOnInit() {
    await this.loadArticle();
  }

  async loadArticle() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      try {
        const response = await this.articleService.getArticleById(+id);
        this.article = response.data;
      } catch (error) {
        console.error('Fetch error:', error);
      }
    } else {
      console.error('Article ID is null');
    }
  }
}

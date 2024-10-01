import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleWithUserResponseData } from 'src/app/models/article/article-with-user-response-data.interface';

interface RouteData {
  articles: ArticleWithUserResponseData[];
  totalCount: number;
}

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

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      const routeData = data as RouteData;
      this.articles = routeData.articles;
      this.totalCount = routeData.totalCount;
      this.totalPages = Math.ceil(this.totalCount / this.limit);
    });
  }

  viewArticle(id: number) {
    this.router.navigate(['/articles/detail', id]);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}

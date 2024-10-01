import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ArticlePaginatedResponse } from 'src/app/models/article/article-paginated-response-data.interface';
import { ArticleWithUserResponseData } from 'src/app/models/article/article-with-user-response-data.interface';
import { ApiResponse } from 'src/app/models/common/api-response.interface';
import { ArticleService } from 'src/app/services/article/article.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlePagenatedListResolver implements Resolve<ArticleWithUserResponseData[]> {
  constructor(private articleService: ArticleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticleWithUserResponseData[]> {
    return this.articleService.getPaginatedArticles(1, 10).pipe(
      map((response: ApiResponse<ArticlePaginatedResponse>) => {
        if (response.success) {
          return response.data.articles;
        } else {
          throw new Error(response.message);
        }
      })
    );
  }
}

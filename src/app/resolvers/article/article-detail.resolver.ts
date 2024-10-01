import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ArticleWithAttachmentAndUserResponseData } from 'src/app/models/article/article-with-attachment-user-response-data.interface';
import { ApiResponse } from 'src/app/models/common/api-response.interface';
import { ArticleService } from 'src/app/services/article/article.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailResolver implements Resolve<ArticleWithAttachmentAndUserResponseData> {
  constructor(private articleService: ArticleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ArticleWithAttachmentAndUserResponseData> {
    const id = route.paramMap.get('id');
    return this.articleService.getArticleById(+id!).pipe(
      map((response: ApiResponse<ArticleWithAttachmentAndUserResponseData>) => {
        if (response.success) {
          console.log("Router실행 시점 - 데이터 로드")
          return response.data;
        } else {
          throw new Error(response.message);
        }
      })
    );
  }
}

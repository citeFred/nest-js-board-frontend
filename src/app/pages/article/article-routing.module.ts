import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleWriteComponent } from './article-write/article-write.component';
import { ArticlePaginatedListComponent } from './article-pagenated-list/article-paginated-list.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RoleGuard } from 'src/app/guards/role.guard';
import { ArticleDetailResolver } from 'src/app/resolvers/article/article-detail.resolver';
import { ArticlePagenatedListResolver } from 'src/app/resolvers/article/article-pagenated-list.resolver';

const routes: Routes = [
  {
    path: '', component: ArticlePaginatedListComponent
  }, 
  {
    path: 'list', component: ArticleListComponent,
    canActivate: [RoleGuard],
    data: { role: 'ADMIN' }
  },
  {
    path: 'paginated-list', component: ArticlePaginatedListComponent,
    resolve: { articles: ArticlePagenatedListResolver }
  },
  {
    path: 'detail/:id', component: ArticleDetailComponent,
    resolve: { article: ArticleDetailResolver }
  },
  {
    path: 'write', component: ArticleWriteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update/:id', component: ArticleUpdateComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}

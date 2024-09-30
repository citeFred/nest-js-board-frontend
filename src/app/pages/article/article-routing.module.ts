import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleWriteComponent } from './article-write/article-write.component';
import { ArticlePaginatedListComponent } from './article-pagenated-list/article-paginated-list.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: ArticlePaginatedListComponent
  }, 
  {
    path: 'list', component: ArticleListComponent
  },
  {
    path: 'paginated-list', component: ArticlePaginatedListComponent
  },
  {
    path: 'detail/:id', component: ArticleDetailComponent
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

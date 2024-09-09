import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListPage } from './article-list.page';
import { ArticleDetailPage } from './article-detail/article-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleListPage
  },
  {
    path: 'detail/:id',
    component: ArticleDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleListPageRoutingModule {}

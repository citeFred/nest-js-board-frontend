import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListPage } from './article/article-list/article-list.page';
import { ArticleDetailPage } from './article/article-detail/article-detail.page';

const routes: Routes = [
  { path: 'article-list', component: ArticleListPage },
  { path: 'article-detail/:id', component: ArticleDetailPage },
  { path: '', redirectTo: 'article-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

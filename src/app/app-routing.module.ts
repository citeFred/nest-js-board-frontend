import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArticleListPage } from './article/article-list/article-list.page';
import { ArticleDetailPage } from './article/article-detail/article-detail.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { 
    path: 'article-list', component: ArticleListPage 
  },
  { 
    path: 'article/:id', component: ArticleDetailPage 
  },
  { 
    path: '', redirectTo: 'article-list', pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

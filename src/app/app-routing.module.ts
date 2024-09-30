import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/article/article.module').then(m => m.ArticleModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'my-page',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

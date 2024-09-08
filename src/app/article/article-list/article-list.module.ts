import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticleListPage } from './article-list.page';
import { ArticleDetailPageRoutingModule } from '../article-detail/article-detail-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleDetailPageRoutingModule,
    RouterModule.forChild([{ path: '', component: ArticleListPage }])
  ],
  declarations: [ArticleListPage]
})
export class ArticleListPageModule {} 

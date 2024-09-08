import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticleListPage } from './article-list.page';
import { ArticleDetailPageRoutingModule } from '../article-detail/article-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleDetailPageRoutingModule
  ],
  declarations: [ArticleListPage]
})
export class ArticleListPageModule {} 

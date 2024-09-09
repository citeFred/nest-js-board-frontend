import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticleListPage } from './article-list.page';
import { ArticleListPageRoutingModule } from './article-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleListPageRoutingModule
  ],
  declarations: [ArticleListPage]
})
export class ArticleListPageModule {}

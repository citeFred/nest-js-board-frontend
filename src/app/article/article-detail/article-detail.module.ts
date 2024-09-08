import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticleDetailPage } from './article-detail.page';
import { ArticleDetailPageRoutingModule } from './article-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleDetailPageRoutingModule
  ],
  declarations: [ArticleDetailPage]
})
export class ArticleDetailPageModule {}

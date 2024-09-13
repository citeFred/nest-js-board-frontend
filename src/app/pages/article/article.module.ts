import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleRoutingModule
  ],
  declarations: [ArticleListComponent, ArticleDetailComponent]
})
export class ArticleModule {}

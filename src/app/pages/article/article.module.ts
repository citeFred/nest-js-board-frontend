import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleWriteComponent } from './article-write/article-write.component';
import { ArticlePaginatedListComponent } from './article-pagenated-list/article-paginated-list.component';
import { ArticleUpdateComponent } from './article-update/article-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleRoutingModule
  ],
  declarations: [ArticleListComponent, ArticlePaginatedListComponent, ArticleDetailComponent, ArticleWriteComponent, ArticleUpdateComponent]
})
export class ArticleModule {}

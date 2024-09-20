import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/article/article.service';
import { ArticleWithAttachmentAndUserResponseData } from 'src/app/models/article/article-with-attachment-user-response-data.interface';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article: ArticleWithAttachmentAndUserResponseData | undefined;
  showDeleteAlert: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadArticle();
  }

  loadArticle() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.articleService.getArticleById(+id).subscribe({
        next: response => {
          if (response.success) {
            this.article = response.data;
          } else {
            console.error(response.message);
          }
        },
        error: err => {
          console.error('Error fetching article:', err);
        },
        complete: () => {
          console.log('Fetching an article request completed.');
        }
      });
    } else {
      console.error('Article ID is null');
    }
  }
  isImage(url: string): boolean {
    return url.match(/\.(jpeg|jpg|gif|png|bmp|webp)$/i) !== null;
  }
  
  downloadFile(url: string) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob(); // Blob 형태로 변환
      })
      .then(blob => {
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        link.href = url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Download failed:', error);
      });
  }

  updateArticle() {
    const articleId = this.route.snapshot.paramMap.get('id');
    console.log("update article's id:"+articleId)
    if (articleId) {
      this.router.navigate(['articles/update', articleId]);
    } else {
      console.error('Article ID is null, cannot navigate to edit page.');
    }
  }

  goBack() {
    this.location.back();
  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: '게시글 삭제',
      message: '정말로 이 게시글을 삭제하시겠습니까?',
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          handler: () => {
            console.log('삭제가 취소되었습니다.');
          }
        },
        {
          text: '삭제',
          handler: () => {
            this.deleteArticle();
          }
        }
      ]
    });
    await alert.present(); // 알림 표시
  }

  deleteArticle() {
    const articleId = this.route.snapshot.paramMap.get('id');
    
    if (articleId) {
      this.articleService.deleteArticle(+articleId).subscribe({
        next: response => {
          if (response.success) {
            console.log('Delete an article successful:', response.data);
            this.router.navigate(['articles']);
          } else {
            console.error('Delete an article failed:', response.message);
          }
        },
        error: err => {
          console.error('Delete an article error:', err);
        },
        complete: () => {
          console.log('Delete an article request completed.');
        }
      });
    } else {
      console.error('Article ID is null, cannot delete the article.');
    }
  }
}


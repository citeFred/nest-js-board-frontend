import { Component } from '@angular/core';
import { ArticleService } from 'src/app/services/article/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-write',
  templateUrl: './article-write.component.html',
  styleUrls: ['./article-write.component.scss'],
})
export class ArticleWriteComponent {
    title: string = '';
    contents: string = '';
    articleFile: File | null = null;

  constructor(private articleService: ArticleService, private router: Router) {  }

  onWriteArticle() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('contents', this.contents);

    if (this.articleFile) {
        formData.append('articleFile', this.articleFile);
    }
    console.log(this.title)
    console.log(this.contents)
    console.log(formData.get('title'));
    console.log(formData.get('contents'));

    // 게시글 작성 API 호출
    this.articleService.writeArticle(formData).subscribe({
        next: response => {
          if (response.success) {
            console.log('Write an article successful:', response.data);
            this.router.navigate(['articles/paginated-list']);
          } else {
            console.error('Write an article failed:', response.message);
          }
        },
        error: err => {
          console.error('Write an article error:', err);
        },
        complete: () => {
          console.log('Write an article request completed.');
        }
      });
    }

        // 파일 선택 시 호출되는 메서드
    onFileChange(event: any) {
        const file = event.target.files[0];
        if (file) {
        this.articleFile = file;
        }
    }
}

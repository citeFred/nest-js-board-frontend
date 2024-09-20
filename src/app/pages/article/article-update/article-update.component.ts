import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article.service';
import { ArticleWithAttachmentAndUserResponseData } from 'src/app/models/article/article-with-attachment-user-response-data.interface';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.scss'],
})
export class ArticleUpdateComponent implements OnInit {
  title: string = '';
  contents: string = '';
  articleFile: File | null = null;
  articleId!: number;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.articleId = +this.route.snapshot.paramMap.get('id')!;
    this.loadArticle(this.articleId);
  }

  loadArticle(id: number) {
    this.articleService.getArticleById(id).subscribe(response => {
      if (response.success) {
        this.title = response.data.title;
        this.contents = response.data.contents;
      } else {
        console.error('Failed to load article:', response.message);
      }
    });
  }

  onUpdateArticle() {
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('contents', this.contents);

    if (this.articleFile) {
      formData.append('articleFile', this.articleFile);
    }

    console.log(this.articleId)
    console.log(this.title)
    console.log(this.contents)
    console.log(formData.get('title'));
    console.log(formData.get('contents'));

    // 수정 API 호출
    this.articleService.updateArticle(this.articleId, formData).subscribe({
      next: response => {
        if (response.success) {
          console.log(response)

          console.log('Article updated successfully:', response.data);
          this.router.navigate(['articles']);
        } else {
          console.error('Update article failed:', response.message);
        }
      },
      error: err => {
        console.error('Update article error:', err);
      },
      complete: () => {
        console.log('Update article request completed.');
      }
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.articleFile = file;
    }
  }

  goBack() {
    this.router.navigate(['/articles']); // 목록으로 돌아가기
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiNewsService } from '../../services/api-news-service.service';
import { IArticles, IDataNews } from '../../models/get-data-news';

@Component({
  selector: 'app-new-detail',
  standalone: true,
  imports: [],
  templateUrl: './new-detail.component.html',
  styleUrl: './new-detail.component.scss',
})
export class NewDetailComponent {
  newsID = this.route.snapshot.paramMap.get('id');
  newSelected: IArticles | undefined = {
    author: '',
    content: '',
    description: '',
    publishedAt: new Date(),
    source: { id: '', name: '' },
    title: '',
    url: '',
    urlToImage: '',
  };

  constructor(
    private route: ActivatedRoute,
    private apiNewsService: ApiNewsService
  ) {
    this.apiNewsService.getAll().subscribe((data) => {
      this.newSelected = data.articles.find(
        (news) => news.source.id === this.newsID
      );
    });
    console.log(this.newSelected);
  }
}

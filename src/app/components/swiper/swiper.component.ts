import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import {
  IArticles,
  IDataNews,
  SwiperArticles,
} from '../../models/get-data-news';
import { ApiNewsService } from '../../services/api-news-service.service';
import { PrimeNGModule } from '../../shared/prime-ng/prime-ng.module';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

register();

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [
    HttpClientModule,
    NgFor,
    NgIf,
    PrimeNGModule,
    NgTemplateOutlet,
    RouterLink,
  ],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent implements OnInit {
  swiperData: SwiperArticles[] = [{ articles: [] }];
  dataNewsFilteredForSwiper: IArticles[] = [];
  dataNews: IDataNews = { articles: [], status: '', totalResults: 0 };

  constructor(private ApiNewService: ApiNewsService) {}

  ngOnInit(): void {
    this.ApiNewService.getAll().subscribe((data) => {
      this.dataNews = data;
      this.dataNewsFilteredForSwiper = data.articles.filter(
        (article) =>
          article.source.id != null &&
          article.urlToImage != null &&
          article.content != null
      );
    });
    this.swiperData[0].articles = this.dataNewsFilteredForSwiper
      .slice(1, 3)
      .concat(this.dataNewsFilteredForSwiper.slice(4, 6));
    console.log(this.swiperData[0].articles);
  }
}

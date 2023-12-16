import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import {
  IArticles,
  IDataNews,
  SwiperArticles,
} from '../../models/get-data-news';
import { ApiNewsService } from '../../services/api-news-service.service';

register();

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent implements OnInit {
  constructor(private ApiNewService: ApiNewsService) {}

  dataNews: IDataNews = { articles: [], status: '', totalResults: 0 };
  dataNewsFilteredForSwiper: IArticles[] = [];
  swiperData: SwiperArticles[] = [
    {
      articles: [],
    },
  ];

  ngOnInit(): void {
    // setTimeout(() => {
    this.ApiNewService.getAll().subscribe((data) => {
      this.dataNews = data;
      this.dataNewsFilteredForSwiper = data.articles.filter(
        (article) => article.source.id != null && article.content != null
      );
    });
    this.swiperData[0].articles = this.dataNewsFilteredForSwiper
      .slice(0, 2)
      .concat(this.dataNewsFilteredForSwiper.slice(4, 6));
    // }, 6000);
  }
}

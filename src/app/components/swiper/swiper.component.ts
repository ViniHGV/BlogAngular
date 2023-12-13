import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperData } from '../../models/swiper-data';
import { GetDatesSwiperService } from '../../services/get-dates-swiper.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { IArticles, IDataNews } from '../../models/get-data-news';

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
  constructor(private getSwiperData: GetDatesSwiperService) {}

  swiperData: SwiperData[] = [];

  getNewsAPI: IDataNews[] | IDataNews | any = [];

  newsAPIFiltered: IArticles[] = [];

  articles: IArticles[] = [];

  ngOnInit() {
    this.getSwiperData
      .getSwiperData()
      .subscribe((data) => (this.swiperData = data));
    console.log(this.swiperData);

    this.getSwiperData
      .getDataNewAPI()
      .pipe()
      .subscribe((data) => {
        this.getNewsAPI = data;
      });

    this.articles = this.getNewsAPI.articles;

    //Exemplo de Filtro
    this.newsAPIFiltered = this.articles.filter(
      (item) => item.author && item.author.includes('Minas')
    );

    console.log(this.newsAPIFiltered);
    console.log(this.getNewsAPI);
  }
}

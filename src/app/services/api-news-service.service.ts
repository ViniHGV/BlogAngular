import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IDataNews } from '../models/get-data-news';

@Injectable({
  providedIn: 'root',
})
export class ApiNewsService {
  readonly APIURL =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=7ee30f6c08ee4311bad90f5220a6da28';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<IDataNews> {
    return this.httpClient.get<IDataNews>(this.APIURL);
  }

  getSwipperData() {
    return of([
      {
        swiperslide: [
          {
            toggle: 'New',
            image:
              'https://cdn.pixabay.com/photo/2017/10/10/21/49/blogger-2838945_640.jpg',
            title: 'As consequencias em se trabalhar com a internet',
          },
          {
            toggle: 'New',
            image:
              'https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_640.jpg',
            title: 'As consequencias em se trabalhar com a internet',
          },
          {
            toggle: 'New',
            image:
              'https://cdn.pixabay.com/photo/2015/03/22/15/26/blog-684748_640.jpg',
            title: 'As consequencias em se trabalhar com a internet',
          },
          {
            toggle: 'New',
            image:
              'https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_640.jpg',
            title: 'As consequencias em se trabalhar com a internet',
          },
        ],
      },
      {
        swiperslide: [
          {
            toggle: 'New',
            image:
              'https://cdn.pixabay.com/photo/2017/10/10/21/49/blogger-2838945_640.jpg',
            title: 'As consequencias em se trabalhar com a internet',
          },
          {
            toggle: 'New',
            image:
              'https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_640.jpg',
            title: 'As consequencias em se trabalhar com a internet',
          },
          {
            toggle: 'New',
            image:
              'https://cdn.pixabay.com/photo/2015/03/22/15/26/blog-684748_640.jpg',
            title: 'As consequencias em se trabalhar com a internet',
          },
          {
            toggle: 'New',
            image:
              'https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849_640.jpg',
            title: 'As consequencias em se trabalhar com a internet',
          },
        ],
      },
    ]);
  }
}

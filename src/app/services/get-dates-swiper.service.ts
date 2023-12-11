import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwiperData } from '../models/swiper-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDatesSwiperService {
  // url: string = 'http://localhost:3000/swiperdata';

  // constructor(private httpClient: HttpClient) {}

  SwiperData: SwiperData[] = [
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
  ];

  getSwiperData(): Observable<SwiperData[]> {
    //   return this.httpClient.get<SwiperData[]>(this.url);
    return of(this.SwiperData);
  }
}

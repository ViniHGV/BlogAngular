import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwiperData } from '../models/swiper-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDatesSwiperService {
  url: string = 'http://localhost:3000/swiperdata';

  constructor(private httpClient: HttpClient) {}

  getSwiperData(): Observable<SwiperData[]> {
    return this.httpClient.get<SwiperData[]>(this.url);
  }
}

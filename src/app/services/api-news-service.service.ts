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
}

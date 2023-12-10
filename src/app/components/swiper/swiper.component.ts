import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperData } from '../../models/swiper-data';
import { GetDatesSwiperService } from '../../services/get-dates-swiper.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

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

  ngOnInit() {
    this.getSwiperData
      .getSwiperData()
      .subscribe((data) => (this.swiperData = data));
    console.log(this.swiperData);
  }
}

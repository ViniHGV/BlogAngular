import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SwiperComponent } from '../../components/swiper/swiper.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SwiperComponent, FooterComponent],
  template: ` <app-swiper /> `,
})
export class HomePage {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SwiperComponent } from './components/swiper/swiper.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDatesSwiperService } from './services/get-dates-swiper.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [GetDatesSwiperService],
  imports: [
    CommonModule,
    RouterOutlet,
    SwiperComponent,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'blog-challenge';
}

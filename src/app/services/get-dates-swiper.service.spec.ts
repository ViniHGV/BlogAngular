import { TestBed } from '@angular/core/testing';

import { GetDatesSwiperService } from './get-dates-swiper.service';

describe('GetDatesSwiperService', () => {
  let service: GetDatesSwiperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDatesSwiperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

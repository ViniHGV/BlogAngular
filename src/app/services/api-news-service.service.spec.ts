import { TestBed } from '@angular/core/testing';

import { ApiNewsService } from './api-news-service.service';

describe('ApiNewsServiceService', () => {
  let service: ApiNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { StaticService } from './static.service';

describe('StaticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticService]
    });
  });

  it('should be created', inject([StaticService], (service: StaticService) => {
    expect(service).toBeTruthy();
  }));
});

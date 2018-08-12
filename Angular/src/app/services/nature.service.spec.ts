import { TestBed, inject } from '@angular/core/testing';

import { NatureService } from './nature.service';

describe('NatureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NatureService]
    });
  });

  it('should be created', inject([NatureService], (service: NatureService) => {
    expect(service).toBeTruthy();
  }));
});

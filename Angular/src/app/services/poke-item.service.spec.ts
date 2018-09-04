import { TestBed, inject } from '@angular/core/testing';

import { PokeitemsService } from './poke-item.service';

describe('PokeitemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeitemsService]
    });
  });

  it('should be created', inject([PokeitemsService], (service: PokeitemsService) => {
    expect(service).toBeTruthy();
  }));
});

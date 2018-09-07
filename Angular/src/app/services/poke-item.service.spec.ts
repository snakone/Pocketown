import { TestBed, inject } from '@angular/core/testing';

import { pokeItemService } from './poke-item.service';

describe('pokeItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [pokeItemService]
    });
  });

  it('should be created', inject([pokeItemService], (service: pokeItemService) => {
    expect(service).toBeTruthy();
  }));
});

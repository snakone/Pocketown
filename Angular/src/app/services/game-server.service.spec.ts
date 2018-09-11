import { TestBed, inject } from '@angular/core/testing';

import { GameServerService } from './game-server.service';

describe('GameServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameServerService]
    });
  });

  it('should be created', inject([GameServerService], (service: GameServerService) => {
    expect(service).toBeTruthy();
  }));
});

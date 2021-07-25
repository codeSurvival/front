import { TestBed } from '@angular/core/testing';

import { GameStepServiceService } from './game-step-service.service';

describe('GameStepServiceService', () => {
  let service: GameStepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

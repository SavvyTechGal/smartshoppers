import { TestBed } from '@angular/core/testing';

import { GetAnswersService } from './answers.service';

describe('GetAnswersService', () => {
  let service: GetAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

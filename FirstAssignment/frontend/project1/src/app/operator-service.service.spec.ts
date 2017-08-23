import { TestBed, inject } from '@angular/core/testing';

import { OperatorServiceService } from './operator-service.service';

describe('OperatorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatorServiceService]
    });
  });

  it('should be created', inject([OperatorServiceService], (service: OperatorServiceService) => {
    expect(service).toBeTruthy();
  }));
});

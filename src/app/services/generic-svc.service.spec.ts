import { TestBed } from '@angular/core/testing';

import { GenericSvcService } from './generic-svc.service';

describe('GenericSvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericSvcService = TestBed.get(GenericSvcService);
    expect(service).toBeTruthy();
  });

  it('should return a list of 4 items', () => {
    const service: GenericSvcService = TestBed.get(GenericSvcService);
    expect(service.getListOfNames().length).toBe(4);
  });


});

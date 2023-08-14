import { TestBed } from '@angular/core/testing';

import { SoscarService } from './soscar.service';

describe('SoscarService', () => {
  let service: SoscarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoscarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

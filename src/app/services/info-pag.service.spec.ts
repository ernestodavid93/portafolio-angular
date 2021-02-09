import { TestBed } from '@angular/core/testing';

import { InfoPagService } from './info-pag.service';

describe('InfoPagService', () => {
  let service: InfoPagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

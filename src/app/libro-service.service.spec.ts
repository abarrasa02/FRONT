import { TestBed } from '@angular/core/testing';

import { LibroService} from './libro-service.service';

describe('LibroService', () => {
  let service: LibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
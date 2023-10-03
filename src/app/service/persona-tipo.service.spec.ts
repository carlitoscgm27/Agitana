import { TestBed } from '@angular/core/testing';

import { PersonaTipoService } from './persona-tipo.service';

describe('PersonaTipoService', () => {
  let service: PersonaTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

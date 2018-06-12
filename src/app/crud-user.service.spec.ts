import { TestBed, inject } from '@angular/core/testing';

import { CrudUserService } from './crud-user.service';

describe('CrudUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudUserService]
    });
  });

  it('should be created', inject([CrudUserService], (service: CrudUserService) => {
    expect(service).toBeTruthy();
  }));
});

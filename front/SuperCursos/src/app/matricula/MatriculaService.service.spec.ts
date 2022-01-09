/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatriculaServiceService } from './MatriculaService.service';

describe('Service: MatriculaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatriculaServiceService]
    });
  });

  it('should ...', inject([MatriculaServiceService], (service: MatriculaServiceService) => {
    expect(service).toBeTruthy();
  }));
});

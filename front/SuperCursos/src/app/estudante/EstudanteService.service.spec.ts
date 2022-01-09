/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstudanteService } from './EstudanteService';

describe('Service: EstudanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstudanteService]
    });
  });

  it('should ...', inject([EstudanteService], (service: EstudanteService) => {
    expect(service).toBeTruthy();
  }));
});

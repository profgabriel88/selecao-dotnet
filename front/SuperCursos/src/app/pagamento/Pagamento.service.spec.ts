/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PagamentService } from './Pagamento.service';

describe('Service: Pagament', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagamentService]
    });
  });

  it('should ...', inject([PagamentService], (service: PagamentService) => {
    expect(service).toBeTruthy();
  }));
});

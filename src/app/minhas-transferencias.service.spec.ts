import { TestBed } from '@angular/core/testing';

import { MinhasTransferenciasService } from './minhas-transferencias.service';

describe('MinhasTransferenciasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinhasTransferenciasService = TestBed.get(MinhasTransferenciasService);
    expect(service).toBeTruthy();
  });
});

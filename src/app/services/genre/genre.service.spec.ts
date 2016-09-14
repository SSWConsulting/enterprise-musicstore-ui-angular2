/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GenreService } from './genre.service';

describe('Service: Genre', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenreService]
    });
  });

  it('should ...', inject([GenreService], (service: GenreService) => {
    expect(service).toBeTruthy();
  }));
});

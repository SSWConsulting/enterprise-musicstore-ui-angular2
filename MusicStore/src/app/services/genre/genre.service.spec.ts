import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GenreService } from './genre.service';

describe('Genre Service', () => {
  beforeEachProviders(() => [GenreService]);

  it('should ...',
      inject([GenreService], (service: GenreService) => {
    expect(service).toBeTruthy();
  }));
});

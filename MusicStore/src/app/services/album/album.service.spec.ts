import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AlbumService } from './album.service';

describe('Album Service', () => {
  beforeEachProviders(() => [AlbumService]);

  it('should ...',
      inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});

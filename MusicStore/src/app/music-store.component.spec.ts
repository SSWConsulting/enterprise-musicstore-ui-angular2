import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MusicStoreAppComponent } from '../app/music-store.component';

beforeEachProviders(() => [MusicStoreAppComponent]);

describe('App: MusicStore', () => {
  it('should create the app',
      inject([MusicStoreAppComponent], (app: MusicStoreAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'music-store works!\'',
      inject([MusicStoreAppComponent], (app: MusicStoreAppComponent) => {
    expect(true).toEqual('music-store works!');
  }));
});

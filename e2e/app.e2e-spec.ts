import { SswMusicStorePage } from './app.po';

describe('ssw-music-store App', function() {
  let page: SswMusicStorePage;

  beforeEach(() => {
    page = new SswMusicStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

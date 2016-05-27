import { MusicStorePage } from './app.po';

describe('music-store App', function() {
  let page: MusicStorePage;

  beforeEach(() => {
    page = new MusicStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('music-store works!');
  });
});

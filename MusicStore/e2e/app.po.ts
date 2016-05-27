export class MusicStorePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('music-store-app h1')).getText();
  }
}

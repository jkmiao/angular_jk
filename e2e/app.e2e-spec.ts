import { Habov2DevPage } from './app.po';

describe('habov2-dev App', function() {
  let page: Habov2DevPage;

  beforeEach(() => {
    page = new Habov2DevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

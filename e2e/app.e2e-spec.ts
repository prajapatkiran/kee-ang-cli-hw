import { KeeAngCliHwPage } from './app.po';

describe('kee-ang-cli-hw App', function() {
  let page: KeeAngCliHwPage;

  beforeEach(() => {
    page = new KeeAngCliHwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

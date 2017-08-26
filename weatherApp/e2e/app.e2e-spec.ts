import { WeahterAppPage } from './app.po';

describe('weahter-app App', function() {
  let page: WeahterAppPage;

  beforeEach(() => {
    page = new WeahterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

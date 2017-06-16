import { MyProPage } from './app.po';

describe('my-pro App', () => {
  let page: MyProPage;

  beforeEach(() => {
    page = new MyProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ECommerceProjectPage } from './app.po';

describe('ecommerce-project App', () => {
  let page: ECommerceProjectPage;

  beforeEach(() => {
    page = new ECommerceProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

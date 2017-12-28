import { AggregateSocNetworksPage } from './app.po';

describe('aggregate-soc-networks App', () => {
  let page: AggregateSocNetworksPage;

  beforeEach(() => {
    page = new AggregateSocNetworksPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

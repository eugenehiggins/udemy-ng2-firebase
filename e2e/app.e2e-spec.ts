import { FirebaseFromScratchPage } from './app.po';

describe('firebase-from-scratch App', function() {
  let page: FirebaseFromScratchPage;

  beforeEach(() => {
    page = new FirebaseFromScratchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

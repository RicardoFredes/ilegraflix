import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('User not signin', () => {
    it('should redirect to /entrar', () => {
      page.navigateTo();
      expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'entrar');
    });
  });

  describe('Sign in', () => {
    it('When password or email is invalid', () => {
      element(by.css('form input[type=email]')).sendKeys('ricardo@ilegraflix.com');
      element(by.css('form input[type=password]')).sendKeys('invalid_password');
      element(by.css('form')).submit()
    })
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

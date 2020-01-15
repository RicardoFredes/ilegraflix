import { AppPage } from './app.po';
import { browser, logging, $, $$ } from 'protractor';

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
    it('When password or email is invalid should show error message', () => {
      $('form input[type=email]').sendKeys('ricardo@ilegraflix.com');
      $('form input[type=password]').sendKeys('invalid_password');
      $('form').submit();
      const messageError = $('.Message').getText();
      expect(messageError).toBe('Não foi possível entrar: o seu e-mail ou a sua senha então errados. Tente novamente.');
    });
    it('When password and email is valid should redirect to /', () => {
      $('form input[type=password]').sendKeys('123456');
      $('form').submit();
      expect(browser.getCurrentUrl()).toBe(browser.baseUrl);
    });
  });

  describe('Home page', () => {
    it('Should show a movies lists', () => {
      const moviesList = $$('.MovieList');
      expect(moviesList.count()).toBe(6);
    });
    it('When click on movie image should redirect to movie page', async () => {
      const movie = $('.MovieList a');
      const link = await movie.getAttribute('href');
      movie.click();
      expect(browser.getCurrentUrl()).toBe(link);
    });
  });

  describe('Movie page', () => {
    it ('When click on movie image, should redirect to player page', async () => {
      const movie = $('a.MovieVideo');
      const link = await movie.getAttribute('href');
      movie.click();
      expect(browser.getCurrentUrl()).toBe(link);
    });
    it('When click in navbar "voltar", should navigate to movie page', async () => {
      const goBackLink = $('#voltar');
      const link = await goBackLink.getAttribute('href');
      goBackLink.click();
      expect(browser.getCurrentUrl()).toBe(link);
    });
  });

  describe('After watching movie', () => {
    it('Home page should show the last movie watched', async () => {
      browser.get(browser.baseUrl);
      const title = await $('.MovieList > h2').getText();
      expect(title).toEqual('Últimos Assistidos'.toUpperCase());
    });
  });

  // TODO: add more tests

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

import { getGreeting } from '../support/app.po';

describe('bidule', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to bidule!');
  });
});

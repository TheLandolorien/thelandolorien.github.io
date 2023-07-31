import { mount } from 'cypress/react';

import App from '../../app';

it('should mount with logo and tagline', () => {
  mount(<App />);
  cy.get('.app-logo').should('have.attr', 'alt').and('equal', 'The Lando Way Logo with Motto');
  cy.get('header').should('have.text', 'A playbook to tackle problems @home and @work.');
});

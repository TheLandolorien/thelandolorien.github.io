import { mount } from 'cypress/react';

import App from '../../app';

it('should mount with logo and tagline', () => {
  mount(<App />);
  cy.get('header img').should('have.class', 'app-logo');
  cy.get('header p').contains('A playbook to tackle problems @home and @work.');
});

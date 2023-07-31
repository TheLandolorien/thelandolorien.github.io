describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');

    cy.get('.app-logo').should('have.attr', 'alt').and('equal', 'The Lando Way Logo with Motto');
    cy.get('header').should('have.text', 'A playbook to tackle problems @home and @work.');
  });
});

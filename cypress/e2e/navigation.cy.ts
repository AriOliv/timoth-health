describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to different sections on the homepage', () => {
    cy.contains('Solutions').click();
    cy.url().should('include', '/#solutions');

    cy.contains('Research').click();
    cy.url().should('include', '/#research');

    cy.contains('About').click();
    cy.url().should('include', '/#about');

    cy.contains('Contact').click();
    cy.url().should('include', '/#contact');
  });

  it('opens and interacts with the products dropdown', () => {
    cy.contains('Products').click();
    cy.contains('ECG Analysis').should('be.visible');
    cy.contains('Endometriosis Insights').should('be.visible');

    cy.contains('ECG Analysis').click();
    cy.url().should('include', '/ecg');

    cy.go('back');
    cy.contains('Products').click();
    cy.contains('Endometriosis Insights').click();
    cy.url().should('include', '/endometriosis');
  });

  it('toggles language', () => {
    cy.get('[aria-label="Toggle language"]').click();
    cy.contains('Produtos').should('be.visible');

    cy.get('[aria-label="Toggle language"]').click();
    cy.contains('Products').should('be.visible');
  });

  it('is responsive and shows mobile menu on smaller screens', () => {
    cy.viewport('iphone-x');
    cy.get('[aria-label="Toggle menu"]').click();
    cy.contains('ECG Analysis').should('be.visible');
    cy.contains('Endometriosis Insights').should('be.visible');
    cy.contains('Solutions').should('be.visible');
    cy.contains('Research').should('be.visible');
    cy.contains('About').should('be.visible');
    cy.contains('Contact').should('be.visible');
  });
});

describe('Performance', () => {
  it('loads the homepage within acceptable time', () => {
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.performance.mark('start-loading');
      },
    }).then((win) => {
      win.performance.mark('end-loading');
      win.performance.measure('page-load', 'start-loading', 'end-loading');
      const measure = win.performance.getEntriesByName('page-load')[0];
      expect(measure.duration).to.be.lessThan(3000); // Adjust threshold as needed
    });
  });

  it('smoothly scrolls to sections', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.window().then((win) => {
      win.performance.mark('start-scroll');
      cy.get('#about').should('be.visible').then(() => {
        win.performance.mark('end-scroll');
        win.performance.measure('scroll-time', 'start-scroll', 'end-scroll');
        const measure = win.performance.getEntriesByName('scroll-time')[0];
        expect(measure.duration).to.be.lessThan(1000); // Adjust threshold as needed
      });
    });
  });
});

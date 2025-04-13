describe('Ajax Loader Test', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return !(
        err.message.includes('Failed to validate CAPTCHA') || 
        err.message.includes('Unexpected token')
      );
    });
  
    cy.visit("https://webdriveruniversity.com/Ajax-Loader/index.html");
  });
  
  it('should click both buttons', () => {
    cy.get('#button1').contains('CLICK ME!', { timeout: 15000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click();
    
    cy.get('.modal-content h4', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'Well Done');
    
    cy.get('.modal-footer .btn-default').contains('Close')
      .should('be.visible')
      .click({ force: true });
    
    cy.get('.modal.fade').should('not.be.visible');
    cy.get('.modal-backdrop').should('not.exist');
  });
});
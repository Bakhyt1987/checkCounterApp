/// <reference types="Cypress" /> 

describe('Counter Feature - Incrementing Number', () => {
    it('should increase the displayed number by 1 when the increment button is clicked', () => {
      cy.visit('http://localhost:3000');
      cy.xpath("//div[@id='app']/button[.='+1']").click();
      cy.get('h2').should('have.text',' 11 ');
    });
  });
  
  describe('Counter Feature - Decrementing Number', () => {
    it('should decrease the displayed number by 1 when the decrement button is clicked', () => {
      cy.visit('http://localhost:3000'); 
      cy.xpath("//div[@id='app']/button[.='-1']").click();
      cy.get('h2').should('have.text', ' 9 ');
    });
  });



  describe('Counter Feature - Increment and Decrement Combination', () => {
    it('should increase by 2 and then decrease by 1', () => {
      cy.visit('http://localhost:3000'); 
      cy.xpath("//div[@id='app']/button[.='+1']").click().click();
      cy.xpath("//div[@id='app']/button[.='-1']").click();
      cy.get('h2').should('have.text',' 11 ');
    });
  });
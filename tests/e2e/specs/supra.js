// https://docs.cypress.io/api/introduction/api.html

describe('Supra Kat Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Supra Kat')
  })

  it('Visits favorites url', () => {
    cy.visit('/favorites')
    cy.contains('h1', 'Supra Kat')
  })


  it('Change Route and go to top', () => {
    cy.visit('/favorites')
    cy.get("div.item").first().should("contain", "Home");
    cy.wait(200);
    cy.get("div.item").first().click();
    cy.wait(200);
    cy.get("div.cat-block").should('be.visible');
    cy.window().its('scrollY').should('equal', 0);
    // Scroll To Top 
    cy.scrollTo(0, 400);
    cy.wait(200);

    cy.get(".to-top").first().should('be.visible').click();
    cy.wait(200);
    cy.window().its('scrollY').should('equal', 0);
  })


  it('Add favorite kat', () => {
    cy.visit('/')
    cy.get("div.item").eq(1).should("contain", "Favorites (0)");
    cy.get("div.cat-square").first().should('be.visible').click();
    cy.get("div.item").eq(1).should("contain", "Favorites (1)");
    cy.get("div.cat-square").eq(1).should('be.visible').click();
    cy.get("div.item").eq(1).should("contain", "Favorites (2)");
    cy.get("div.cat-square").first().should('be.visible').click();
    cy.get("div.item").eq(1).should("contain", "Favorites (1)");
  })


})

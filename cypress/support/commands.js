// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (password, senha) => {

    cy.contains('Automation').should('be.visible')

    cy.contains('Signup / Login').click()
    cy.contains('Login to your account').should('be.visible')

    cy.fixture('login.json').then((data) => {
        cy.get(data.elements["username"]).type(data.inputs["username"]);
        cy.get(data.elements["password"]).type(data.inputs["password"]);
    });

    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as').should('be.visible')
});

Cypress.Commands.add('buscar_produto', () => {
    cy.contains('Products').click();
    cy.contains('All Products').should('be.visible');

    //adicionar fixture
    cy.get('#search_product').type('Fancy Green Top');
    
    cy.get('#submit_search').click();
    cy.contains('Searched Products').should('be.visible');
    cy.get('h2').contains('Rs. 700');
});
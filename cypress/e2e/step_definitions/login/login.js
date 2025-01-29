import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("Que estou na pagina de Login", () => {
    // Intercepta e ignora requisições para o Backtrace.io
    cy.intercept('POST', 'https://events.backtrace.io/**', {
        statusCode: 200,
        body: {}
    }).as('ignoreBacktrace');
    
    // Acessa a página de login
    cy.visit("https://www.saucedemo.com/")
})

When("Eu registrei meu e-mail e senha", () => {
    cy.get('#user-name').clear().type('standard_user')
    cy.get('#password').clear().type('secret_sauce')
    cy.get('#login-button').click()
})

Then("O login e realizado com sucesso", () => {
    cy.contains('Swag Labs').should('be.visible')
})
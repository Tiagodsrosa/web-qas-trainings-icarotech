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

// Comando customizado para realizar o login
Cypress.Commands.add("login", (password, senha) => {
  cy.contains("Automation").should("be.visible");

  cy.contains("Signup / Login").click();
  cy.contains("Login to your account").should("be.visible");

  cy.fixture("login.json").then((data) => {
    cy.get(data.elements["username"]).type(data.inputs["username"]);
    cy.get(data.elements["password"]).type(data.inputs["password"]);
  });

  cy.get('[data-qa="login-button"]').click();
  cy.contains("Logged in as").should("be.visible");
});

// Comando customizado para buscar produto
Cypress.Commands.add("buscar_produto", () => {
  cy.contains("Products").click();
  cy.contains("All Products").should("be.visible");

  cy.get("#search_product").type("Fancy Green Top");

  cy.get("#submit_search").click();
  cy.contains("Searched Products").should("be.visible");
  cy.get("h2").contains("Rs. 700");
});

// Comando customizado para realizar o Signup
Cypress.Commands.add("signup", (username, email) => {
  // Garante que a página principal está carregada corretamente
  cy.contains("Automation").should("be.visible");

  // Clica no link de Signup/Login
  cy.contains("Signup / Login").click();
  // Verifica se a seção de novo usuário está visível
  cy.contains("New User Signup!").should("be.visible");

  // Carrega os elementos e inputs do arquivo desafio-signup.json
  cy.fixture("desafio-signup.json").then((data) => {
    cy.get(data.elements["username"]).type(data.inputs["username"]);
    cy.get(data.elements["email"]).type(data.inputs["email"]);
  });

  // Clica no botão Signup 
  cy.get('[data-qa="signup-button"]').click();

  // Verifica se a tela de criação de conta foi carregada
  cy.contains("Enter Account Information").should("be.visible");
});

// Comando customizado para preencher formulario de cadastro
Cypress.Commands.add("registration_form", () => {
  cy.fixture("desafio-registration-form.json").then((data) => {
    // Selecionar gênero
    cy.get("#id_gender1", { timeout: 10000 }).should("be.visible").check();

    // Preencher os dados pessoais
    cy.get(data.elements.password).type(data.inputs.password);
    cy.get(data.elements.days).select(data.inputs.days);
    cy.get(data.elements.months).select(data.inputs.months);
    cy.get(data.elements.years).select(data.inputs.years);

    // Marcar checkboxes
    cy.get("#newsletter").check();
    cy.get("#optin").check();

    // Preencher os dados de endereço
    cy.get(data.elements.first_name).type(data.inputs.first_name);
    cy.get(data.elements.last_name).type(data.inputs.last_name);
    cy.get(data.elements.company).type(data.inputs.company);
    cy.get(data.elements.address1).type(data.inputs.address1);
    cy.get(data.elements.address2).type(data.inputs.address2);
    cy.get(data.elements.country).select(data.inputs.country);
    cy.get(data.elements.state).type(data.inputs.state);
    cy.get(data.elements.city).type(data.inputs.city);
    cy.get(data.elements.zipcode).type(data.inputs.zipcode);
    cy.get(data.elements.mobile_number).type(data.inputs.mobile_number);
  });
});

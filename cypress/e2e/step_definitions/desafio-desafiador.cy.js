describe("Cenários desafio módulo 2", () => {
    before(() => {
      cy.visit("https://automationexercise.com/");
    });
  
    it("Signup, completar cadastro e deletar conta", () => {
      // Iniciar Signup
      cy.signup();
  
      // Preencher formulário de cadastro
      cy.registration_form();
  
      // Criar conta
      cy.get('[data-qa="create-account"]').click();
      cy.get('[data-qa="account-created"]').should("be.visible");
      cy.get('[data-qa="continue-button"]').click();
  
      // Validar login bem-sucedido
      cy.contains("Logged in as Tiago").should("be.visible");
  
      // Excluir conta
      cy.contains(" Delete Account").click();
      cy.get('[data-qa="account-deleted"]').should("be.visible");
      cy.get('[data-qa="continue-button"]').click();
    });
  });
  
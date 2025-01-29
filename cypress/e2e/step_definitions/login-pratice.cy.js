describe('Fluxo de add itens', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });
  
  it('Login com sucesso', () => {
    cy.login();
  });

  it('Pesquisar um produto', () => {
    cy.login();
    cy.buscar_produto();
  });

  it.only('Adicionar itens no carrinho', () => {
    cy.login();
    cy.buscar_produto();
    cy.get('[data-product-id="8"]').eq(0).click();
    cy.contains('Your product has been added to cart.').should('be.visible');
    cy.contains('Continue Shopping').click();
  });

});
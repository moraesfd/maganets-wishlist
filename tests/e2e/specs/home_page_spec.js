describe('Página inicial', function () {
  it('Carregamento da Home', function () {
    cy.visit('/');
  });
  it('Logo da página deve ser o texto MagaNets', function () {
    cy.get('a.header-container__company').should('contain', 'MagaNets');
  })
  it('Pesquisar por "Réplica"', function () {
    cy.get('.search-bar input').type('Réplica');
  })
  it('Resultado da pesquisa retornar apenas 1 item', function () {
    cy.get('.list-products__list li').its('length').should('be', 1);
  })
  it('Selecionar o primeiro item', function () {
    cy.get('.list-products__list li:first-of-type button').click()
  })
});
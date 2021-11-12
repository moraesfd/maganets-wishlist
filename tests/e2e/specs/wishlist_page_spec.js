describe('Página Wishlist', function () {
  it('Carregamento da Wishlist', function () {
    cy.visit('/wishlist');
  });
  it('Logo da página deve ser o texto MagaNets', function () {
    cy.get('a.header-container__company').should('contain', 'MagaNets');
  })
});
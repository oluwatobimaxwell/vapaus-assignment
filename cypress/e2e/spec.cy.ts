describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('#app-home').should("be.visible");
  })
})
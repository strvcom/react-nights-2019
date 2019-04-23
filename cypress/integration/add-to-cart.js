describe('home page', () => {
  it('should display home page', () => {
    cy.visit('/products')
    cy.get('button')
      .eq(1)
      .click()
    cy.get('button')
      .eq(2)
      .click()
      .click()
    cy.contains('My Cart').click()
    cy.get('li').should('have.length', 2)
  })
})

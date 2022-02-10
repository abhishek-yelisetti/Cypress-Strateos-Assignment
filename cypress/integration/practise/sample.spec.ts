context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })

it('type()',() => {
    cy.get('#email1')
  .type('nisanth@email.com').should('have.value', 'nisanth@email.com')
})


it('focus()',() => {
    cy.get('#password1').focus()
  .should('have.class', 'focus')
  .prev().should('have.attr', 'style', 'color: orange;')
})

it('blur()',() => {
    cy.get('.action-blur').type('About to blur').blur()
  .should('have.class', 'error')
  .prev().should('have.attr', 'style', 'color: red;')
})
})
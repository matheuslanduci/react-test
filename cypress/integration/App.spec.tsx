/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('renders count, increment and decrement buttons', () => {
    cy.get('[data-testid="count"]').should('contain', 'Count: 0')
    cy.get('[data-testid="increment-button"]').should('contain', 'Increment')
    cy.get('[data-testid="decrement-button"]').should('contain', 'Decrement')
  })

  it('the increment button should increment count', () => {
    cy.get('[data-testid="increment-button"]').click()

    cy.get('[data-testid="count"]').should('contain', 'Count: 1')
  })

  it('the decrement button should decrement count', () => {
    cy.get('[data-testid="decrement-button"]').click()

    cy.get('[data-testid="count"]').should('contain', 'Count: -1')
  })
})

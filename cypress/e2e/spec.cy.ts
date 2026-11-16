describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Bookly')
  })
})

describe('Test Stephen King', () => {
  it('Visits the initial project page', () => {
    cy.visit('/authors/list')
    cy.contains('Stephen King')
  })
})

describe('Prueba Formulario', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Authors').click()
    cy.contains('Create').click()
  })
  it('Ir a la pagina de crear Author', () => {
    cy.url().should('include', '/authors/create')
  })
  it('Llenar el formulario y enviar', () => {
    cy.get('#name').type('Billy McBucket')
    cy.get('#image').type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxZOc0SE66AdvCawPMrqs1xBJIpTJgnOiGV3L42APyoQK0iRvFvRBwl6W&s=10')
    cy.get('#birthDate').type('2002-11-06')
    cy.get('#description').type('The greatest author ever.')
    cy.get('.btn-primary').click()
    cy.contains('Author created')
  })
  it('Llenar el formulario y borrar', () => {
    cy.get('#name').type('Billy McBucket')
    cy.get('#image').type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHxZOc0SE66AdvCawPMrqs1xBJIpTJgnOiGV3L42APyoQK0iRvFvRBwl6W&s=10')
    cy.get('#birthDate').type('2002-11-06')
    cy.get('#description').type('The greatest author ever.')
    cy.get('.btn-danger').click()
    cy.get('#name').should('have.value', '')
  })
})

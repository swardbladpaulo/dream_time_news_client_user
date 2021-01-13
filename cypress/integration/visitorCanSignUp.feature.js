describe('Visitor can register', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fx:articles_data.json"
    })
    cy.visit("/")
  })
})

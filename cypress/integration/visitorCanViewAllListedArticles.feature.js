/* eslint-disable no-undef */
describe("Visitor can", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: "fixture:articles_data.json",
      });
    });

    it("view all listed articles", () => {
      cy.get('[data-cy="index"]').within(() => {
        cy.contains("Title 1");
        cy.contains("Title 2");
        cy.contains("Title 3");
      });
    });
  });

  describe("unsuccessfully if no response data is given", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: {},
      });
    });

    it("view all listed articles", () => {
      cy.get('[data-cy="index"]').should("not.exist");
    });
  });
});

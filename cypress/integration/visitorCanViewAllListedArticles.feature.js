/* eslint-disable no-undef */
describe("Visitor can see list of articles", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("successfully", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: "fixture:articles_data.json",
      });
    });

    it("successfully view all listed articles", () => {
      cy.get('#index').within(() => {
        cy.contains('Title1');
        cy.contains('Title2');
        cy.contains('Title3');
      });
    });
  });

  describe("unsuccessfully if no response data is given", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: {"articles": []},
      });
    });

    it("unsuccessfully view all listed articles", () => {
      cy.get('#index').should("not.exist");
    });
  });
});

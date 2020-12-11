/* eslint-disable no-undef */
describe("Visitor can see list of articles", () => {

  describe("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: "fixture:articles_data.json",
      });
      cy.visit("/");
    });

    it("successfully view all listed articles", () => {
      cy.get('[data-cy="index"]').within(() => {
        cy.contains('Title1');
        cy.contains('Title2');
        cy.contains('Title3');
      });
    });
  });

  describe("unsuccessfully if no response data is given", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: {"articles": []},
      });
      cy.visit("/");
    });

    it("unsuccessfully view all listed articles", () => {
      cy.get('[data-cy="index"]').should("not.exist");
    });
  });
});

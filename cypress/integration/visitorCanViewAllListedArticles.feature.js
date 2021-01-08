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
        cy.get(">div").each((_, index) => {
          cy.get(`[data-cy="article-${index + 1}"]`).within(() => {
            cy.get('[data-cy="title"]').should("exist");
            cy.get('[data-cy="sub-title"]').should("exist");
            cy.get('[data-cy="content"]').should("exist");
            cy.get('[data-cy="created-at"]').should("exist");
            cy.get('[data-cy="updated-at"]').should("exist");
            cy.get('[data-cy="author-email"]').should("exist");
          });
        });
      });
    });
  });

  describe("unsuccessfully if no response data is given", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: { articles: [] },
      });
      cy.visit("/");
    });

    it("unsuccessfully view all listed articles", () => {
      cy.get('[data-cy="index"]').should("not.be.visible");
    });
  });
});

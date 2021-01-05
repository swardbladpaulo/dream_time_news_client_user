describe("visitor can read one article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:article_data.json",
    });
    cy.visit("/");
  });

  it("successfully view one article", () => {
    cy.get('[data-cy="index"]').within(() => {
      cy.get('[data-cy="read-me-button"]').click();
      cy.get('[data-cy="article-title"]').should("contain", "Title1");
      cy.get('[data-cy="article-sub-title"]').should("contain", "sub_title 1");
      cy.get('[data-cy="article-content"]').should(
        "contain",
        "Contrary to popular belief, Lorem Ipsum is not simply random text."
      );
      cy.get('[data-cy="article-created-at"]').should("contain", "2020-04-15");
      cy.get('[data-cy="article-updated-at"]').should("contain", "2020-04-19");
      cy.get('[data-cy="article-author"]').should(
        "contain",
        "journalist@mail.com"
      );
    });
  });
});

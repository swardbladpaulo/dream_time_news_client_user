describe("visitor can read one article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_data.json",
    });

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles/**",
      response: "fixture:article_data.json",
    });
    cy.visit("/");
  });

  it("successfully view one article", () => {
      cy.get('[data-cy="read-me-button1"]').click();
      cy.get('[data-cy="article-title"]').should("contain", "Title1");
      cy.get('[data-cy="article-sub-title"]').should("contain", "sub_title 1");
      cy.get('[data-cy="article-content"]').should(
        "contain",
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      );
      cy.get('[data-cy="article-created-at"]').should("contain", "2020-04-15");
      cy.get('[data-cy="article-updated-at"]').should("contain", "2020-04-19");
      cy.get('[data-cy="article-author"]').should(
        "contain",
        "journalist@mail.com"
      );
    });
  });

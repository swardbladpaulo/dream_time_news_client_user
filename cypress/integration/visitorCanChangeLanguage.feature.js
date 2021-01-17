describe("visitor can choose language", () => {
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
  it('successfully changes from english to swedish and back to english', () => {
    cy.get("[data-cy='se-btn']").click()
    cy.get("[data-cy='register-btn']").should("contain", "Dream Time News Premium");
    cy.get("[data-cy='us-btn']").click()
    cy.get("[data-cy='register-btn']").should("contain", "Dream Time News Premium");
  });
});

describe("User can open application", () => {
  it("", () => {
    cy.visit('/')
    cy.get("h1").should("contain", "Hello Dream Time News!")
  });
});

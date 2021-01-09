describe("User can register", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth",
      response: "fixture:visitor_can_register.json",
      headers: {
        uid: "user@mail.com",
        access_token: "token",
        client: "12345",
        token_type: "Bearer",
        expiry: 100008,
      },
    });
    cy.visit("/");
  });

  it("successfully with valid credentials", () => {
    cy.get("[data-cy='register-btn']").click();
    cy.get("[data-cy='registration-form']").within(() => {
      cy.get("[data-cy='email']").type("user@mail.com");
      cy.get("[data-cy='password']").type("password");
      cy.get("[data-cy='password-confirmation']").type("password");
      cy.get("[data-cy='submit-btn']").click();
    });    
  });

  it('sad path: unsuccessful register', () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth",
      status: "401",
      response: {
        errors: ["Registration failed, please try again"],
        success: false,
      },
    });

    cy.get("[data-cy='register-btn']").click();
    cy.get("[data-cy='registration-form']").within(() => {
      cy.get("[data-cy='email']").type("user@mail.com");
      cy.get("[data-cy='password']").type("wrongpassword");
      cy.get("[data-cy='password-confirmation']").type("password");
      cy.get("[data-cy='submit-btn']").click();
    });
    cy.get("[data-cy='error-confirmation-message']").contains(
      "Registration failed, please try again"
    );
  });
});

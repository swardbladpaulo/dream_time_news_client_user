describe("User can register", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fx:visitor_can_register.json",
      headers: {
        uid: "user@mail.com",
      },
    });
    /*is for the path way from the test since we visit the mainpage in app witch trigger get all the articles.
    need to be removed when we are finish with header.*/
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/auth/validate_token**",
      response: "fx:visitor_can_register.json",
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
    cy.get("[data-cy='header-user-email']").should(
      "contain",
      "Logged in as user@mail.com"
    );
  });

  describe("sad path: unsuccessful register", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/auth",
        status: "401",
        response: {
          errors: ["Registration failed, please try again"] /*from backend*/,
          success: false,
        },
      });
    });

    it("unsuccessful registration", () => {
      cy.get("[data-cy='register-btn']").click();
      cy.get("[data-cy='registration-form']").within(() => {
        cy.get("[data-cy='email']").type("user@mail.com");
        cy.get("[data-cy='password']").type("wrongpassword");
        cy.get("[data-cy='password-confirmation']").type("password");
        cy.get("[data-cy='submit-btn']").click();
      });
      // cy.get("[data-cy='error-confirmation-message']").contains(
      //   "Registration failed, please try again"
      //   )
    });
  });
});

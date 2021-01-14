describe("User can register", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/**",
      response: "fx:visitor_can_register.json",
      headers: {
        uid: "registered_user@user.com",
      },
    });
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/auth/validate_token',
      status: 200,
      response: 'fixture:visitor_can_register.json'
    })

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fx:articles_data.json",
    });
    cy.visit("/");
  });

  it.only("successful registration", () => {
    cy.get("[data-cy='register-btn']").click();
    cy.get("[data-cy='registration-form']").within(() => {
      cy.get("[data-cy='email']").type("registered_user@user.com");
      cy.get("[data-cy='password']").type("123456789");
      cy.get("[data-cy='password-confirmation']").type("123456789");
    });
    // cy.get("[data-cy='first-form-submit']").within(() => {
    //   cy.get("[data-cy='submit-btn']").click();
    // });
    cy.get("button").contains("Proceed").click()
    cy.get("[data-cy='header-user-email']").should(
      "contain",
      "Logged in as registered_user@mail.com"
    );
  });

  describe("sad path: unsuccessful register", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/**",
        status: "401",
        response: {
          errors: "Registration unsuccessful",
          success: false,
        },
      });
    });

    it("unsuccessful registration", () => {
      cy.get("[data-cy='register-btn']").click();
      cy.get("[data-cy='registration-form']").within(() => {
        cy.get("[data-cy='email']").type("user@mail.com");
        cy.get("[data-cy='password']").type("password");
        cy.get("[data-cy='password-confirmation']").type("wrongpassword");
      });
      cy.get("[data-cy='first-registration']").within(() => {
        cy.get("[data-cy='submit-btn']").click();
        cy.get("[data-cy='error-message']").contains(
          "Registration unsuccessful"
        );
      });
    });
  });
  
});

describe("User can register", () => {
    beforeEach(() => {
        cy.server();
        cy.route({
            method: "POST",
            url: "htp://localhost:3000/api/auth",
            response: "fixture:visitor_can_register.json",
            headers: {
                uid: "user@mail.com",
                access_token: "token",
                client: "12345",
                token_type: "Bearer",
                expiry: "1000000",
            },
        });
        cy.visit("/");
    });

    it("successfully with valid credentials", () => {
        cy.get("[data-cy='register-btn']").click();
        cy.get("[data-cy='register-form']").within(() => {
            cy.get("[data-cy='email']").type("user@mail.com");
            cy.get("[data-cy='password']").type("password");
            cy.get("[data-cy='password-confirmation']").type("password");
        });
        cy.get("[data-cy='submit-btn']").click();
    });
});
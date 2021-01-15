describe("User can see subscribe form", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fx:articles_data.json",
    });

    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/subscriptions",
      response: "fx:stripe_response.json",
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/**",
      response: "fx:visitor_can_register.json",
      headers: {
        uid: "registered_user@user.com",
        access_token: "token",
        client: "12345",
        token_type: "Bearer",
        expiry: 20000,
      },
    });
    cy.visit("/");
  });

describe("registered user", () => {
  it("can fill payment form and subscribe", () => {
    // cy.route({
    //   method: "POST",
    //   url: "http://localhost:3000/api/**",
    //   response: "fx:visitor_can_register.json",
    //   headers: {
    //     uid: "registered_user@user.com",
    //     access_token: "token",
    //     client: "12345",
    //     token_type: "Bearer",
    //     expiry: 20000,
    //   },
    // });
    cy.wait(500);
    cy.get('[data-cy="card-number"]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="cardnumber"]')
          .type("4242424242424242", { delay: 10 });
      });
    });
    cy.get('[data-cy="card-expiry"]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="exp-date"]')
          .type("1222", { delay: 10 });
      });
    });
    cy.get('[data-cy="card-cvc"]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[name="cvc"]').type("424", { delay: 10 });
      });
    });
    cy.get("[data-cy='payment-details']").within(() => {
      cy.get("[data-cy='submit-payment']").click().click();
    });
    cy.get("[data-cy='payment-message']").contains(
      "You are now a subscriber"
    );
  });
});
});

/*stripe error message from api to add 'Something went wrong'*/

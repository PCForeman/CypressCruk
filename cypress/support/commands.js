

Cypress.Commands.add("cookiePopupHandler", () => {
  cy.contains(`✓ OK, continue to site`).click();
});

Cypress.Commands.add("getAmount", (amount) => {
  cy.fixture('donor').as('donor.json')
  cy.get(`[data-cy="amount-sel-${amount}"]`).click();
});

Cypress.Commands.add("getDonationType", (type) => {
  cy.contains(`${type}`).click();
});

Cypress.Commands.add("getReasonForDonationSelection", (reason) => {
  cy.get('[data-testid="selectMotivation"]').select(`${reason}`);
});

Cypress.Commands.add("getInMemoryOf", (firstname,  lastname) => {
  cy.get('[data-testid="inMemoryName"]').type(`${firstname + " " + lastname}`);
});

Cypress.Commands.add("getSpecifiedCause", () => {
  cy.contains("Choose a cancer type or an area of research").click();
});

Cypress.Commands.add("selectSpecifiedDonationCause", (cause) => {
  cy.get('[data-testid="restrictionSelect"]').select(`${cause}`);
});

Cypress.Commands.add("getNextPage", () => {
  cy.contains("Continue").click();
});

Cypress.Commands.add("selectTitle", (title) => {
  cy.get('[data-testid="title"]').select(`${title}`);
});

Cypress.Commands.add("fillOutDetails", (field, input) => {
  cy.get(`[data-testid="${field}"]`).type(input);
});

Cypress.Commands.add("fillOutPostalCode", (postalCode, address, town) => {
  cy.get("#postalCode").type(postalCode);
  cy.contains("Find address").click();
  cy.get('[id="addressSelection"]')
    .select(`${address + ", " + town + ", " + postalCode}`)
    .wait(5000);
});

Cypress.Commands.add("emailOptOut", () => {
  cy.get("label").find("input").should("have.class", "sc-ivTmOn lgdxfM sc-jOrMOR hqgZq")
  cy.get("label").find("input").should("have.class", "sc-ivTmOn lgdxfM sc-jOrMOR hqgZq")
  cy.get('input[name="emailOptIn"]').eq(1).check({force: true})
  cy.get('input[name="textOptIn"]').eq(1).check({force: true})
});

Cypress.Commands.add(
  "fillOutPayByCard",
  (paymentType, firstname, lastname, cardNo, expiry, cvv) => {
    cy.contains(`${paymentType}`).click().wait(5000);
    cy.get("#cardholderName").type(firstname + " " + lastname).click().wait(5000);
    cy.get("#braintree-hosted-field-number").its('0.contentDocument.body').find('#credit-card-number').type(cardNo).wait(2500);
    cy.get("#braintree-hosted-field-expirationDate").its('0.contentDocument.body').find('#expiration').type(expiry).wait(2500);
    cy.get("#braintree-hosted-field-cvv").its('0.contentDocument.body').find('#cvv').type(cvv).wait(2500);
    });

Cypress.Commands.add("selectGiftAid", () => {
  cy.contains("Yes I would like Cancer Research UK to claim Gift Aid on my donation").click();
});

Cypress.Commands.add("completePayment", () => {
  cy.contains("Complete my donation").click();
})

Cypress.Commands.add("checkDonationResponseForDonationID", () => {
  cy.request();
})

Cypress.Commands.add("cookiePopupHandler", () => {
  cy.contains(`✓ OK, continue to site`)
    .should("be.visible")
    .click()
    .should("not.be.visible");
});

Cypress.Commands.add("getAmount", (amount) => {
  cy.fixture("donor").as("donor.json");
  cy.get(`[data-cy="amount-sel-${amount}"]`).should("not.be.visible").click().wait(2500);
});

Cypress.Commands.add("getDonationType", (type) => {
  cy.contains(`${type}`).should("be.visible").click().wait(2500);
});

Cypress.Commands.add("getReasonForDonationSelection", (reason) => {
  cy.get('[data-testid="selectMotivation"]')
    .should("be.visible")
    .select(`${reason}`).wait(2500);
});

Cypress.Commands.add("getInMemoryOf", (firstname, lastname) => {
  cy.get('[data-testid="inMemoryName"]')
    .should("be.visible")
    .type(`${firstname + " " + lastname}`).wait(2500);
});

Cypress.Commands.add("getSpecifiedCause", () => {
  cy.contains("Choose a cancer type or an area of research")
    .should("be.visible")
    .click().wait(2500);
});

Cypress.Commands.add("selectSpecifiedDonationCause", (cause) => {
  cy.get('[data-testid="restrictionSelect"]')
    .should("be.visible")
    .select(`${cause}`).wait(2500);
});

Cypress.Commands.add("getNextPage", () => {
  cy.contains("Continue").should("be.visible").click();
});

Cypress.Commands.add("selectTitle", (title) => {
  cy.get('[data-testid="title"]').should("be.visible").select(`${title}`).wait(2500);
});

Cypress.Commands.add("fillOutDetails", (field, input) => {
  cy.get(`[data-testid="${field}"]`).should("be.visible").type(input).wait(2500);
});

Cypress.Commands.add("fillOutPostalCode", (postalCode, address, town) => {
  cy.get("#postalCode").should("be.visible").type(postalCode).wait(2500);
  cy.contains("Find address").should("be.visible").click().wait(2500);
  cy.get('[id="addressSelection"]')
    .should("be.visible")
    .select(`${address + ", " + town + ", " + postalCode}`)
    .wait(2500);
});

Cypress.Commands.add("emailOptOut", () => {
  cy.get("label")
    .find("input")
    .should("have.class", "sc-ivTmOn lgdxfM sc-jOrMOR hqgZq");
  cy.get("label")
    .find("input")
    .should("have.class", "sc-ivTmOn lgdxfM sc-jOrMOR hqgZq");
  cy.get('input[name="emailOptIn"]')
    .eq(1)
    .should("not.be.visible")
    .check({ force: true }).wait(2500);
  cy.get('input[name="textOptIn"]')
    .eq(1)
    .should("not.be.visible")
    .check({ force: true }).wait(2500);
});

Cypress.Commands.add(
  "fillOutPayByCard",
  (paymentType, firstname, lastname, cardNo, expiry, cvv) => {
    cy.contains(`${paymentType}`).click().wait(5000);
    cy.get("#cardholderName")
      .type(firstname + " " + lastname)
      .click()
      .wait(2500);
    cy.get("#braintree-hosted-field-number", { setTimeout: 5000 })
      .should("be.visible")
      .its("0.contentDocument.body")
      .find("#credit-card-number")
      .type(cardNo)
      .wait(2500);
    cy.get("#braintree-hosted-field-expirationDate", { setTimeout: 5000 })
      .should("be.visible")
      .its("0.contentDocument.body")
      .find("#expiration")
      .type(expiry)
      .wait(2500);
    cy.get("#braintree-hosted-field-cvv", { setTimeout: 5000 })
      .should("be.visible")
      .its("0.contentDocument.body")
      .find("#cvv")
      .type(cvv)
      .wait(2500);
  }
);

Cypress.Commands.add("selectGiftAid", () => {
  cy.contains(
    "Yes I would like Cancer Research UK to claim Gift Aid on my donation"
  ).click().wait(2500);
});

Cypress.Commands.add("completePaymentAndCheckApiResponse", () => {
  cy.contains("Complete my donation").click();
  cy.intercept({
    method: "POST",
    url: "https://api.pws.int.cruk.org/transaction",
  }).as("responseFound");
  cy.wait("@responseFound").then(($resp) => {
    const id = $resp.response.body.id;
    cy.get("strong").should("be.visible").and("contain.text", id);
  });
});

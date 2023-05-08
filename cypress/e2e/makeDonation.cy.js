describe("Navigate to CRUK WebApp, Complete the donation page ", (baseUrl = "https://app.pws.int.cruk.org/support-us/your-donation", forenameField = "forename", surnameField = "surname", emailAddressField = "emailAddress", phoneNoField = "phoneNumber", paymentType = "Credit / Debit card") => {
  it("passes", () => {
    cy.fixture("donor").then((donor) => {
      const donorAmount = donor.amount;
      const donationType = donor.donationType;
      const donationSelection = donor.motivation;
      const donorTitle = donor.title;
      const donorFirstname = donor.firstname;
      const donorLastname = donor.lastname;
      const donorCancerType = donor.cancerType;
      const donorEmail = donor.email;
      const donorPhone = donor.phone;
      const donorPostalCode = donor.homeAddress.postcode;
      const donorAddress = donor.homeAddress.address1;
      const donorTown = donor.homeAddress.town;
      const donorCardNo = donor.cardNumber;
      const donorCardExpiry = donor.cardExpiry;
      const donorCardCvv = donor.cvv;
      cy.visit(baseUrl);
      cy.cookiePopupHandler();
      cy.getAmount(donorAmount);
      cy.getDonationType(donationType);
      cy.getReasonForDonationSelection(donationSelection);
      cy.getInMemoryOf(donorFirstname, donorLastname);
      cy.getSpecifiedCause();
      cy.selectSpecifiedDonationCause(donorCancerType);
      cy.getNextPage();
      cy.selectTitle(donorTitle);
      cy.fillOutDetails(forenameField, donorFirstname);
      cy.fillOutDetails(surnameField, donorLastname);
      cy.fillOutDetails(emailAddressField, donorEmail);
      cy.fillOutDetails(phoneNoField, donorPhone);
      cy.fillOutPostalCode(donorPostalCode, donorAddress, donorTown);
      cy.emailOptOut();
      cy.getNextPage();
      cy.fillOutPayByCard(
        paymentType,
        donorFirstname,
        donorLastname,
        donorCardNo,
        donorCardExpiry,
        donorCardCvv
      );
      cy.selectGiftAid();
      cy.completePaymentAndCheckApiResponse();
    });
  });
});

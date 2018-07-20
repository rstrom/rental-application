describe("Multi-page application form for tenants", () => {
  it("Should have a field for full name", () => {
    cy.visit("/page/1");
    cy.get("input.full-name").type("Satoshi Nakamoto");
  });
  it("Should have a field for email", () => {
    cy.visit("/page/2");
    cy.get("input.email").type("satoshi@gmail.com");
  });
  it("Should have a field for phone number", () => {
    cy.visit("/page/3");
    cy.get("input.phone").type("+0000000000");
  });
  it("Should have a field for - salary indication (radio buttons)", () => {
    cy.visit("/page/4");
    cy.get("select.salary").select("0 - 1.000");
  });
  // - 0 - 1.000
  // - 1.000 - 2.000
  // - 2.000 - 3.000
  // - 3.000 - 4.000
  // - Mehr als 4.000
  it("Should have a progress indicator", () => {
    cy.visit("/page/1");
    cy.get(".progress-bar");
  });
  it("Should have a summary of all the data on the last page.", () => {
    cy.visit("/summary");
    cy.get(".summary").contains("Satoshi Nakamoto");
    cy.get(".summary").contains("satoshi@gmail.com");
    cy.get(".summary").contains("+0000000000");
    cy.get(".summary").contains("0 - 1.000");
  });
});

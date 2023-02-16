/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const baseUrl = "http://localhost:3000";

describe("example to-do app", () => {
    
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // test cases u have to change is these all 'it' below
  it("Checking text", () => {
    cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to -  baseUrl + "/main.html"
    cy.get("div").then((span) => {
      const text = span.text().trim();
      expect(text).to.eq(`Welcome to the world of Web development`);
    });
  });
    

  it("Checking binding of id with div tag", () => {
    cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to -  baseUrl + "/main.html"
    cy.get("div#text");
  });
    
    
});

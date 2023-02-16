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

describe("Basic Rendering", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // test cases u have to change is these all 'it' below
  it("Checking text", () => {
    cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to -  baseUrl + "/main.html"
    cy.get("input#block_id").should("exist");
    cy.get("input#colour_id").should("exist");
    cy.get(".grid-container").find(".grid-item").eq(8).should("exist");
    cy.get("#change_button").should("have.text", "Change");
    cy.get("#reset_button").should("have.text", "Reset");
    cy.get(".grid-container").find(".grid-item").eq(0).should("have.text", "1");
    cy.get(".grid-container").find(".grid-item").eq(1).should("have.text", "2");
    cy.get(".grid-container").find(".grid-item").eq(2).should("have.text", "3");
    cy.get(".grid-container").find(".grid-item").eq(3).should("have.text", "4");
    cy.get(".grid-container").find(".grid-item").eq(4).should("have.text", "5");
    cy.get(".grid-container").find(".grid-item").eq(5).should("have.text", "6");
    cy.get(".grid-container").find(".grid-item").eq(6).should("have.text", "7");
    cy.get(".grid-container").find(".grid-item").eq(7).should("have.text", "8");
    cy.get(".grid-container").find(".grid-item").eq(8).should("have.text", "9");
  });
});

describe("Working", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // test cases u have to change is these all 'it' below
  it("Checking Change button", () => {
    cy.visit(baseUrl + "/main.html"); //always check this "visit" in your test case that it is set to -  baseUrl + "/main.html"
    cy.get("input#block_id").type("3");
    cy.get("input#colour_id").type("red");
    cy.get("#change_button").click();
    cy.get(".grid-container")
      .find(".grid-item")
      .eq(2)
      .should("have.css", "background-color", "rgb(255, 0, 0)");
    cy.get(".grid-container")
      .find(".grid-item")
      .eq(1)
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.get(".grid-container")
      .find(".grid-item")
      .eq(0)
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.get(".grid-container")
      .find(".grid-item")
      .eq(3)
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.get(".grid-container")
      .find(".grid-item")
      .eq(4)
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.get(".grid-container")
      .find(".grid-item")
      .eq(5)
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.get(".grid-container")
      .find(".grid-item")
      .eq(6)
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.get(".grid-container")
      .find(".grid-item")
      .eq(7)
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.get(".grid-container")
      .find(".grid-item")
      .eq(8)
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  });

  it("reset button",()=>{
    cy.get("#reset_button").click();
    cy.get(".grid-container")
    .find(".grid-item")
    .eq(4)
    .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  cy.get(".grid-container")
    .find(".grid-item")
    .eq(5)
    .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  cy.get(".grid-container")
    .find(".grid-item")
    .eq(6)
    .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  cy.get(".grid-container")
    .find(".grid-item")
    .eq(7)
    .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  cy.get(".grid-container")
    .find(".grid-item")
    .eq(8)
    .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    cy.get(".grid-container")
    .find(".grid-item")
    .eq(0)
    .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  cy.get(".grid-container")
    .find(".grid-item")
    .eq(1)
    .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  cy.get(".grid-container")
    .find(".grid-item")
    .eq(2)
    .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  cy.get(".grid-container")
    .find(".grid-item")
    .eq(3)
    .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  
    
  })
});

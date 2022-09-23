import React from "react";
import LoginPage from "../../src/views/LoginPage";
import { BrowserRouter as Router } from "react-router-dom";


describe("Login.cy.tsx", () => {
  beforeEach(() => {
    cy.viewport(1024, 768)
    // @ts-ignore here because mount is not defined in cypress
		cy.mount(
			<Router>
				<LoginPage />
			</Router>,
		);
  });

	it("Submit button should be enabled when valid email and password is entered", () => {
    cy.get("input#email").type("antti.isosaari@mail.fi");
    cy.get("input#password").type("Abc12345");
    cy.get("button#submit").should("be.enabled");
	});

  it("Submit button should be disabled when invalid email or password is entered", () => {
    cy.get("input#email").type("antti.isosaari@");
    cy.get("input#password").type("Abc12345");
    cy.get("button#submit").should("be.disabled");
	});
  
  it("Should hide or show password when the hide/show password button is clicked", () => {
    cy.get("input#password").type("Abc12345");
    cy.get("button#password-show-or-hide").click();
    cy.get("input#password").should("have.attr", "type", "text");
    cy.get("button#password-show-or-hide").click();
    cy.get("input#password").should("have.attr", "type", "password");
	});
});
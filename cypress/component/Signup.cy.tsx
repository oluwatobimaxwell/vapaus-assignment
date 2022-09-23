import React from "react";
import SignupPage from "../../src/views/SignupPage";
import { BrowserRouter as Router } from "react-router-dom";


describe("Login.cy.tsx", () => {
  beforeEach(() => {
    cy.viewport(1024, 768)
    // @ts-ignore here because mount is not defined in cypress
		cy.mount(
			<Router>
				<SignupPage />
			</Router>,
		);
  });

	it("Submit button should be enabled when valid email, password & password repeat is entered", () => {
    cy.get("input#email").type("antti.isosaari@mail.fi");
    cy.get("input#password").type("Abc12345");
    cy.get("input#password_repeat").type("Abc12345");
    cy.get("button#submit").should("be.enabled");
	});

  it("Submit button should be disabled when valid email but none match password/password repeat is entered", () => {
    cy.get("input#email").type("antti.isosaari@mail.fi");
    cy.get("input#password").type("Abc12345");
    cy.get("input#password_repeat").type("Abc112345");
    cy.get("button#submit").should("be.disabled");
	});
});
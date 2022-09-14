describe("Blog app", () => {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/testing/reset")
    const user = {
      username: "root",
      name: "root",
      password: "root",
    }
    cy.request("POST", "http://localhost:3003/api/users", user)

    cy.visit("http://localhost:3000")
  })

  it("Login form is shown", function () {
    cy.contains("Login")
  })

  describe("Login", function () {
    it("succeeds with correct credentials", function () {
      cy.contains("Login").click()
      cy.get("#username").type("root")
      cy.get("#password").type("root")
      cy.get("#loginButton").click()

      cy.contains("Add Blog")
    })

    it("fails with incorrect credentials", function () {
      cy.contains("Login").click()
      cy.get("#username").type("roots")
      cy.get("#password").type("roots")
      cy.get("#loginButton").click()

      cy.contains("Wrong Credentials")
      cy.get("html").should("not.contain", "Add Blog")
    })
  })
})

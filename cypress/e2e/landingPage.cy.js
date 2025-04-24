const sizes = ['iphone-8', 'ipad-mini', 'macbook-15']

describe('Landing Page', () => {
  it('Should show the Landing Page Headline', () => {
    cy.getByDataCy('headline').contains(/Kelly Popko/i)
  })

  sizes.forEach((size) => {
    beforeEach(() => {
      cy.visit('/')
    })

    context('Button: "About Me"', () => {
      it(`Should go to "About Me" section (${size})`, () => {
        cy.viewport(size)
        cy.getByDataCy('about-me-link').click()
        cy.url().should('include', '#about-me')
        cy.getByDataCy('about-me-h2').should('be.visible')
      })
    })

    context('Button: "Go to Portfolio"', () => {
      it(`Should go to Portfolio page (${size})`, () => {
        cy.viewport(size)
        cy.getByDataCy('button-portfolio').click()
        cy.url().should('include', '/portfolio')
      })
    })

    context('Button: "Contact Me"', () => {
      it(`Should go to Contact page (${size})`, () => {
        cy.viewport(size)
        cy.getByDataCy('button-contact-me').click()
        cy.url().should('include', '/contact')
      })
    })
  })
})


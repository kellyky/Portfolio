const sizes = ['iphone-8', 'ipad-mini', 'macbook-15']

describe('Portfolio Page', () => {
  sizes.forEach((size) => {
    beforeEach(() => {
      cy.visit('/portfolio')
    })

    // View project button goes to the project page
    // should have 4:
    // - h2
    // - images
    // - image has alt text


    context('Project', () => {
      it(`Should be 4 (${size})`, () => {
        cy.getByDataCy('project-list').within(() => {
          cy.get('li').should('have.length', 4)
          cy.get('h2').should('have.length', 4)
          cy.get('img').should('have.length', 4)
        })
      })
    })

    context('Button: View Project', () => {
      it('Should go to the selected project page', () => {
        // access the button - maybe by the selector
        // get the data-cy from the button
        // use data-cy value (maybe split it) to create regex for the url

        cy.getByDataCy('project-list').within(() => {
          // const project = cy.getByDataCy('project-link')

          // return cy.get(`[data-cy=${selector}]`)
          cy.get('a').contains(/View Project/i)



        })
      })
    })

    // context('Button: "About Me"', () => {
    //   it(`Should go to "About Me" section (${size})`, () => {
    //     cy.viewport(size)
    //     cy.getByDataCy('about-me-link').click()
    //     cy.url().should('include', '#about-me')
    //     cy.getByDataCy('about-me-h2').should('be.visible')
    //   })
    // })
  })
})


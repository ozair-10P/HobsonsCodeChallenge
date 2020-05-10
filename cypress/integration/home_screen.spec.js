describe('Home Screen Scenarios', () => {
    beforeEach(() => {

        //Code handle in command.js      
        cy.openWebsite()
        
    })

    it('Verify pagetitle text and down arrow', () => {

        
        cy.get('[class="pagetitle c"]')
          .find('h1')
          .should('contain','We help students across the journey of a lifetime.')
          .and('have.css','text-align','center')

        cy.get('[class="home-more"]',{timeout: 5000})
          .click()
        
        cy.get('#section-learn-more')
          .find('h2')
          .should('contain','How can we help your students?')
          .and('be.visible')
          .and('have.css','text-align','center')

      })

      it('Verify hamburger menu and items in list', () => {

        cy.get('[class="menu"]')
          .should('contain','Menu')   
          .click()

        //Home
        cy.get('nav ul li a')
          .should('contain','Home')

        //Solutions  
        cy.get('nav ul li a')
          .contains('Solutions')
          .click()
          
        cy.get('[class="expand"] li').find('a')
          .should('have.length',3)

        cy.get('nav ul li a')
          .contains('Solutions').click()

        cy.get('[class="expand"]')
          .should('not.exist')
 
        //Services
        cy.get('nav ul li a')
          .should('contain','Services')
          
        //Resources 
          cy.get('nav ul li a')
          .contains('Resources').click()
          
        cy.get('[class="expand"] li').find('a')
          .should('have.length',8)
          .eq(2)
          .should('contain','Events')

        cy.get('nav ul li a')
          .contains('Resources').click()

        cy.get('[class="expand"]')
          .should('not.exist')  

        //About  
        cy.get('nav ul li a')
          .contains('About').click()
          
        cy.get('[class="expand"] li').find('a')
          .should('have.length',5)

        cy.get('nav ul li a')
          .contains('About').click()

        cy.get('[class="expand"]')
          .should('not.exist')  
         
        //Blog
        cy.get('nav ul li a')
          .should('contain','Blog')
          
      }) 
})
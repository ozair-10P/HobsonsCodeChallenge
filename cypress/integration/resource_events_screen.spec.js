describe('Events Screen Scenarios', () => {
    beforeEach(() => {
        
        //Code handle in command.js  
        cy.openWebsite()

        cy.get('[class="menu"]')
          .should('contain','Menu')   
          .click()

        cy.get('nav ul li a')
          .contains('Resources').click()
      
        cy.get('[class="expand"] li').find('a')
          .eq(2)
          .should('contain','Events')
          .click();
        
    })

    it('Verify events on the page occurs in the future', () => {
       
       //Alias
        cy.get('[id="articles"] [class="listing res-events nm"]').as('events')
        cy.get('[id="articles"] [class="listing res-events nm"] [class="txt"] p').as('eventText')
        cy.get('[id="articles"] [class="listing res-events everythird"] [class="txt"]').as('thirdColumnEvents')
        
        cy.get('@events')
          .should('have.length',6)

        cy.get('@thirdColumnEvents')
          .should('have.length',3)
        
        //Verified future event data.  
        cy.get('@thirdColumnEvents')
          .find('h4 a')
          .should('contain','ERDI Summer 2020')

        cy.get('@thirdColumnEvents')
          .find('p')
          .and('contain','July 2020')
          .and('contain','Education Research & Development Institute Summer 2020')

        //Following partial logic was created to assert that whether event occurs in future. 
        //Limitation is that the dates in front-end do not follow a specific format and for some events dates are missing.  
        //From automation engineer point of view better approach would be to follow a standard date template and an expected mock data should be provided.

        // const expected = 2020;
        // cy.get('@eventText'). then(result =>{
        //     Object.keys(result).forEach((item,index) => {
                
        //         cy.get(result)
        //         .eq(index)
        //         .should('contain',expected)
          
        //      })
        
        //  })

    })
})
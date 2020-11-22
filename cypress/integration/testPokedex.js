/// <reference types="cypress" />


describe('testeo de funcionalidades de pokedex', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8080')
    })

    it('testea las cards', () => {
        cy.get('.poke-card').should('have.length', 20)
            .within(() => {
                cy.get('.poke-id').first().should('contain.text', '001')
                cy.get('.poke-name').last().should('not.have.descendants')
                cy.get('.img-container').should('contain.html', 'img');
            })
    })

    it('testea el índice', () => {
        cy.get('.index-number').eq(0).click()
        cy.get('.index-number').eq(0).should('have.text', "3")

    })

    it('selecciona un pokemon', () => {
        cy.get('.poke-name').contains('bulbasaur').click()
        cy.visit('http://127.0.0.1:8080/pokemon.html')
        cy.get('.title').contains('BULBASAUR')
    })

    it("evalua la pagina pokemon.html", () =>{
        cy.visit('http://127.0.0.1:8080/pokemon.html')
        cy.get('.container-info').should('be.visible')

    })
})
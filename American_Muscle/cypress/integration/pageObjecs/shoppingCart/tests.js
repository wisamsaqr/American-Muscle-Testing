import {ShoppingCartPageItems} from "./items"

export class ShoppingCartPageTests
{
    constructor()
    {
        this.items = new ShoppingCartPageItems();
    }

    // Page Visited
    pageVisited()
    {
        cy.url().should('include', '/shopping-cart.html');

        // Page Header
        this.items.pageHeader().should('have.text', 'Your Cart')


        // Cart
        this.items.cartItems().should('have.length.gte', 0)

        this.items.cartFirstItemUnitPrice().invoke('text')
        .then(up=>
        {
            cy.get('@productPrice').should('eq', up.replace('$', ''))
        })

        
    }

    // Set quantity to 11
    elevenOptionInQuantityDropdownListSelected()
    {
        this.items.quantityDropdownListOneOption().should('not.have.class', 'dd-selected')
        this.items.quantityDropdownListElevenOption().should('have.class', 'dd-selected')
    }
}
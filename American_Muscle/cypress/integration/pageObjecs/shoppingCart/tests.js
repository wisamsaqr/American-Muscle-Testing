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

    // Add the selected product to cart
    // selectedProductAddedToCart()
    // {
    //     // this.items.saveForLaterLoginModal().should('be.visible')
    // }
}
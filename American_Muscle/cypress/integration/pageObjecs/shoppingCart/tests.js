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
    }

    // Add the selected product to cart
    // selectedProductAddedToCart()
    // {
    //     // this.items.saveForLaterLoginModal().should('be.visible')
    // }
}
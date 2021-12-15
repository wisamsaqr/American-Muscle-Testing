import {ProductDetailsPageItems} from "./items"

export class ProductDetailsPageTests
{
    constructor()
    {
        this.items = new ProductDetailsPageItems();
    }

    // Page Visited
    pageVisited()
    {
        cy.url().should('include', '/sp-performance-camaro-diamond-slot-rotors-gray-zrc-front-d55-2154.html');

        cy.get('@productWithHighestCustomreRatingName').then(name=>
        {
            this.items.productNameHeadLine().invoke('text').should('include', name)
        })
    }
}
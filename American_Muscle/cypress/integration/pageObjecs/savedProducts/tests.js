import {SavedProductsPageItems} from "./items"

export class SavedProductsPageTests
{
    constructor()
    {
        this.items = new SavedProductsPageItems();
    }

    // Page Visited
    pageVisited()
    {
        cy.url().should('include', '/saved-for-later.html');
        
        this.items.savedForLaterNavItem().should('exist')   // mmm

        // this.items.savedForLaterNavItem().find('a').should('exist')

        // this.items.savedForLaterNavItem().should('contain.html', 'span')

        this.items.listsTitle().should('have.text', ' Saved Products ')
    }
}
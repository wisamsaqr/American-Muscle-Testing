import {CamaroAccessoriesPartsPageItems} from "./items"

export class CamaroAccessoriesPartsPageTests
{
    constructor()
    {
        this.items = new CamaroAccessoriesPartsPageItems();
    }

    // Page Visited
    pageVisited()
    {
        cy.url().should('include', '/2016-camaro-accessories-parts.html');
    }

    freeCamaroCatalogRequestModalHidden()
    {
        this.items.freeCamaroCatalogRequestModal().should('not.be.visible')
    }
    
    // 
    // allCategoriesNavItemSelected()
    // {
    //     this.items.allCategoriesNavItem().should('have.class', 'current-menu-item')
    // }
}
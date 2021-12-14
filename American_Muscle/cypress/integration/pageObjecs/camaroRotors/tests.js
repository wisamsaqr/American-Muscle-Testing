import {CamaroRotorsPageItems} from "./items"

export class CamaroRotorsPageTests
{
    constructor()
    {
        this.items = new CamaroRotorsPageItems();
    }

    // Page Visited
    pageVisited()
    {
        cy.url().should('include', '/2016-camaro-rotors.html');
    }

    // freeCamaroCatalogRequestModalHidden()
    // {
    //     this.items.freeCamaroCatalogRequestModal().should('not.be.visible')
    // }
}
import {CatalogRequestModalItems} from "./items"

export class CatalogRequestModalTests
{
    constructor()
    {
        this.items = new CatalogRequestModalItems();
    }

    freeCamaroCatalogRequestModalHidden()
    {
        this.items.freeCamaroCatalogRequestModal().should('not.be.visible')
    }
}
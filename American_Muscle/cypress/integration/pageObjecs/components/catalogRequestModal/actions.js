import {CatalogRequestModalItems} from "./items"

export class CatalogRequestModalActions
{
    constructor()
    {
        this.items = new CatalogRequestModalItems();
    }

    // Free Camaro Catalog Request Modal
    closeFreeCamaroCatalogRequestModal()
    {
        this.items.freeCamaroCatalogRequestModalCloseLink().click();
    }
}
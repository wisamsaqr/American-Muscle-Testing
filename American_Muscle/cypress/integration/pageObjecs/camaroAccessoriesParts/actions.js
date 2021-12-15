import {CamaroAccessoriesPartsPageItems} from "./items"

export class CamaroAccessoriesPartsPageActions
{
    constructor()
    {
        this.items = new CamaroAccessoriesPartsPageItems();
    }

    clickRotorsNavItem()
    {
        this.items.rotorsNavItem().click({force: true});
    }






    // Free Camaro Catalog Request Modal
    closeFreeCamaroCatalogRequestModal()
    {
        this.items.freeCamaroCatalogRequestModalCloseLink().click();
    }
}
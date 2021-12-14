import {CamaroAccessoriesPartsPageItems} from "./items"

export class CamaroAccessoriesPartsPageActions
{
    constructor()
    {
        this.items = new CamaroAccessoriesPartsPageItems();
    }

    clickRotorsNavItem()
    {
        this.items.rotorsNavItem().click();
    }




    // Free Camaro Catalog Request Modal
    closeFreeCamaroCatalogRequestModal()
    {
        // this.items.freeCamaroCatalogRequestModalCloseLink().click();

        if (this.items.freeCamaroCatalogRequestModal().length > 0)
        {
            this.items.freeCamaroCatalogRequestModalCloseLink().click();
        }
    }
}
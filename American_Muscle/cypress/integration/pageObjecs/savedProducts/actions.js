import {SavedProductsPageItems} from "./items"

export class SavedProductsPageActions
{
    constructor()
    {
        this.items = new SavedProductsPageItems();
    }

    // Add the selected product to cart
    clickAddToCartButton()
    {
        this.items.addToCartButton().click({force: true});
    }
}
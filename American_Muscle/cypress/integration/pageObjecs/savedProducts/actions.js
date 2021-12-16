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
        this.items.productPriceItem().invoke('text').then(text=>
        {
            cy.wrap(text.replace('$', '')).as('productPrice')
        })
        
        // 
        this.items.addToCartButton().click({force: true});
    }
}
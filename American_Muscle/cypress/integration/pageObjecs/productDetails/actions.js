import {ProductDetailsPageItems} from "./items"

export class ProductDetailsPageActions
{
    constructor()
    {
        this.items = new ProductDetailsPageItems();
    }

    // Adding the product to the saved products list
    clickSaveForLaterButton()
    {
        this.items.saveForLaterButton().click({force: true});
    }

    submitSaveForLaterLoginModal(email)
    {
        this.items.saveForLaterLoginModalEmailInput().type(email);
        this.items.saveForLaterLoginModalSubmitButton().click({force: true})
    }

    // Navigating to "Saved Products" page
    clickSavedProductsMenuItem()
    {
        this.items.savedProductsMenuItem().click({force: true})
    }
}
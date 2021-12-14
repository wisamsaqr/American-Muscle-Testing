import {HomePageItems} from "./items"

export class HomePageActions
{
    constructor()
    {
        this.items = new HomePageItems();
    }

    navigate()
    {
        cy.visit("/");
    }

    clickAllCategoriesNavItem()
    {
        this.items.camaroShopNavItem().click();
    }



    // clickAllCategoriesNavItem()
    // {
    //     this.items.allCategoriesNavItem().click();
    // }
}
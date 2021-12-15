import {HomePageItems} from "./items"

export class HomePageActions
{
    constructor()
    {
        this.items = new HomePageItems();
    }

    visit()
    {
        cy.visit("/");
    }

    clickCamaroShopNavItem()
    {
        this.items.camaroShopNavItem().click({force: true});
    }

    clickCamaro2016_2022ShopNavItem()
    {
        this.items.camaroShop2016_2022NavItem().click();
    }

    


    // camaro-accessories-parts ///////////////////////////
    
    clickBrakesNavItem()
    {
        this.items.brakesNavItem.click();
    }
}
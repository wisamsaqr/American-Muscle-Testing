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

    clickCamaroShopNavItem()
    {
        this.items.camaroShopNavItem().click();
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
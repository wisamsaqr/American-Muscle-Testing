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

    
    
    
    
    
    
    CloseFreeCamaroCatalogRequestModal()
    {
        this.items.freeCamaroCatalogRequestModalCloseLink().click();
    }
}
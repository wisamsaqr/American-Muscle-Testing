import {HomePageItems} from "./items"

export class HomePageTests
{
    constructor()
    {
        this.items = new HomePageItems();
    }

    // Page Visited
    pageVisited()
    {
        cy.url().should('eq', 'https://www.americanmuscle.com/');
    }
    

    // Camaro Shop nav item
    camaroShopNavItemClicked()
    {
        cy.url().should('include', '/#camaro')
    }

    camaroShop2016_2022NavItemClicked()
    {
        cy.url().should('include', '/2016-camaro-accessories-parts.html')
    }

    // All categories nav item click
    // allCategoriesNavItemClicked()
    // {
    //     this.items.homeNavItem().should('have.class', 'current-menu-item')
    // }
}
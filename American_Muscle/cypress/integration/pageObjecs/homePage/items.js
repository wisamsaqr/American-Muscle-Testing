export class HomePageItems
{
    constructor(){}

    camaroShopNavItem()
    {
        return cy.get('div#page div.vehicle_select_container nav > a[data-vehicle-type="Camaro"]');
    }

    // allCategoriesNavItem()
    // {
    //     return cy.get('nav#nav ul[id^=menu]>li[id^=menu-item] > a').contains('جميع الفئات');
    // }
}
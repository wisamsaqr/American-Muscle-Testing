export class HomePageItems
{
    constructor(){}

    camaroShopNavItem()
    {
        return cy.get('div#page div.vehicle_select_container nav > a[data-vehicle-type="Camaro"]', {timeout:60000});
    }

    camaroShop2016_2022NavItem()
    {
        return cy.get('div#page div.sub_panel_visible nav > a[title="2016-2022 Camaro Accessories & Parts"]');
    }




    
    
    
    
    
    
}
export class HomePageItems
{
    constructor(){}

    camaroShopNavItem()
    {
        return cy.get('div#page div.vehicle_select_container nav > a[data-vehicle-type="Camaro"]');
    }

    camaroShop2016_2022NavItem()
    {
        return cy.get('div#page div.sub_panel_visible nav > a[title="2016-2022 Camaro Accessories & Parts"]');
    }

    
    
    
    
    
    
    // freeCamaroCatalogRequestModalCloseLink()
    // {
    //     return cy.get('div.marketing_modal > form[data-form-type="RequestCatalog"] a.close_trigger')
    //     .contains('No thanks');
    // }
}
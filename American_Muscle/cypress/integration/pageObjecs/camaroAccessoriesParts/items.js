export class CamaroAccessoriesPartsPageItems
{
    constructor(){}

    // brakesNavItem()
    // {
    //     return cy.get('section.gen_select_container ul.nav_first_tier a[title="2016-2021 Camaro Brakes"]')
    //     .contains('Brakes');
    // }

    rotorsNavItem()
    {
        return cy.get('div.nav_second_tier div.categories a[title="2016-2021 Camaro Rotors"]')
        .contains('Rotors');
    }




    // Free Camaro Catalog Request Modal
    freeCamaroCatalogRequestModal()
    {
        return cy.get('div.marketing_modal > div.marketing_modal');
    }

    freeCamaroCatalogRequestModalCloseLink()
    {
        return cy.get('div.marketing_modal > form[data-form-type="RequestCatalog"] a.close_trigger')
        .contains('No thanks');
    }
}
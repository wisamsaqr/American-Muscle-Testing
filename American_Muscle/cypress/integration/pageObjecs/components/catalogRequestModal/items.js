export class CatalogRequestModalItems
{
    constructor(){}

    // Free Camaro Catalog Request Modal
    freeCamaroCatalogRequestModal()
    {
        return cy.get('div.marketing_modal > div.marketing_modal');
    }

    freeCamaroCatalogRequestModalCloseLink()
    {
        return cy.get('div.marketing_modal > form[data-form-type="RequestCatalog"] a.close_trigger')
        .contains('No thanks').then((e)=>
        {
cy.log(e.length)
        });
    }
}
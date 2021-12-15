export class ProductDetailsPageItems
{
    constructor(){}
    
    // Page visit
    productNameHeadLine()
    {
        return cy.get('h1.product_name');
    }
}
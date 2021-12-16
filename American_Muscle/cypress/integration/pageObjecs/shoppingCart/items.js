export class ShoppingCartPageItems
{
    constructor(){}
    
    // Page visit
    savedForLaterNavItem()
    {
        ;
    }

    // Add the selected product to cart
    addToCartButton()
    {
        return cy.get('a[title="Add to Shopping Cart"]');
    }
}
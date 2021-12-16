export class SavedProductsPageItems
{
    constructor(){}
    
    // Page visit
    savedForLaterNavItem()
    {
        // return cy.get('ul.steps > li[data-pageid="myaccountbuildlist"]');
        return cy.get('ul.steps > li[data-pageid="myaccountbuildlist"] > span');
    }

    listsTitle()
    {
        return cy.get('p.lists_title');
    }

    // Add the selected product to cart
    productPriceItem()
    {
        return cy.get('li.product_container span.price', {timeout: 60000});
    }
    
    addToCartButton()
    {
        return cy.get('a[title="Add to Shopping Cart"]');
    }
}
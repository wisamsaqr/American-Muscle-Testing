export class ShoppingCartPageItems
{
    constructor(){}
    
    // Page visit
    pageHeader()
    {
        return cy.get('h1.page_header');
    }

    // Add the selected product to cart
    cartItems()
    {
        return cy.get('section.cart li.product_item');
    }

    // cart First Item    // section.cart li.product_item:nth-child(2) > div.details_container
    // cartFirstItemProductName()
    // {
    //     return cy.get('section.cart li.product_item:nth-child(2) > div.details_container p.product_name');
    // }

    cartFirstItemUnitPrice()
    {
        return cy.get('section.cart li.product_item:nth-child(2) > div.details_container > div.unit_price');
    }
}
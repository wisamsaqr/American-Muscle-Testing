export class ProductDetailsPageItems
{
    constructor(){}
    
    // Page visit
    productNameHeadLine()
    {
        return cy.get('h1.product_name');
    }

    // Adding the product to the saved products list
    saveForLaterButton()
    {
        return cy.get('a.save_for_later_trigger');
    }

    saveForLaterLoginModal()
    {
        return cy.get('div.cart_actions > section.order_details div[data-qatgt="login_modal"]',
            {timeout:30000});
    }

    saveForLaterLoginModalEmailInput()
    {
        return cy.get('div.cart_actions > section.order_details div[data-qatgt="login_modal"] input#email');
    }

    saveForLaterLoginModalSubmitButton()
    {
        return cy.get('div.cart_actions > section.order_details div[data-qatgt="login_modal"] button');
    }

    saveForLaterSavedMessage()
    {
        return cy.get('section.save_for_later_container p.saved');
    }

    // Navigating to my build list (saved products page)
    savedProductsMenuItem()
    {
        return cy.get('ul.menu_list a[title="View your Build Lists"]');
    }
}
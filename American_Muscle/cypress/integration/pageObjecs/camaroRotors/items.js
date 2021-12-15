export class CamaroRotorsPageItems
{
    constructor(){}

    // Brake Rotors And Drums Filtering
    brakeRotorsAndDrumsFilter()
    {
        return cy.get('a[data-facet-id="Brake Rotors and Drums"]');
    }

    brakeRotorsAndDrumsFacet()
    {
        return cy.get('p[data-facet-id="Brake Rotors and Drums"]');
    }

    brakeRotorsAndDrumsFilterCount()
    {
        return cy.get('a[data-facet-id="Brake Rotors and Drums"] span.count');
    }

    brakeRotorsAndDrumsProductsContainerCount()
    {
        return cy.get('div.products_container p.total > span.total_matching');
    }

    brakeRotorsAndDrumsPaginationCount()
    {
        return cy.get('nav.pagination p.total');
    }

    // Price Filtering
    min_priceInput()
    {
        return cy.get('input.min_price');
    }

    max_priceInput()
    {
        return cy.get('input.max_price');
    }

    limitPriceGoButton()
    {
        return cy.get('button.limit_price');
    }

    retailPriceFacet()
    {
        return cy.get('p[data-group-id="RetailPrice"]');
    }

    // Sorting rotors by By Customer Rating
    sortSelect()
    {
        return cy.get('select[name="sort"]');
    }

    firstRotorCustomerRatingItem()
    {
        return cy.get('div[data-qatgt="rating"] + p > span').first();
    }

    allRotorCustomerRatingItems()
    {
        return cy.get('div[data-qatgt="rating"] + p > span');
    }

    
    
    
    










////////////////////////////////////////

    products()
    {
        return cy.get('li.product_container');
    }

    paginationNext()
    {
        return cy.get('nav.pagination a.next');
    }
}
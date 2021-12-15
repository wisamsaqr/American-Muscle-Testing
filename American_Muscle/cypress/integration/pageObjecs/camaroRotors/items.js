export class CamaroRotorsPageItems
{
    constructor(){}

    brakeRotorsAndDrumsFilter()
    {
        return cy.get('a[data-facet-id="Brake Rotors and Drums"]');
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

    brakeRotorsAndDrumsFacet()
    {
        return cy.get('p[data-facet-id="Brake Rotors and Drums"]');
    }
}
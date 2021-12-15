import {CamaroRotorsPageItems} from "./items"

export class CamaroRotorsPageTests
{
    constructor()
    {
        this.items = new CamaroRotorsPageItems();
    }

    // Page Visited
    pageVisited()
    {
        cy.url().should('include', '/2016-camaro-rotors.html');
    }

    BrakeRotorsAndDrumsFiltered()
    {
        this.items.brakeRotorsAndDrumsFacet().then(()=>
        {
            this.items.brakeRotorsAndDrumsFilterCount().invoke('text')
            .then(count=>
            {
                this.items.brakeRotorsAndDrumsProductsContainerCount().invoke('text').should("eq", count)
                
                this.items.brakeRotorsAndDrumsPaginationCount().invoke('text')
                .then(paginationText=>
                {
                    let paginationCount = paginationText.split(' ')[3]
                    expect(paginationCount).to.eq(count)
                })
            })
        })




        // this.items.brakeRotorsAndDrumsFilterCount().invoke('text').as('BrakeRotorsAndDrumsFilterCount')
        // cy.get('@BrakeRotorsAndDrumsFilterCount').then((count)=>{cy.log(count)})
    }
}
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

    brakeRotorsAndDrumsFiltered()
    {
        this.items.brakeRotorsAndDrumsFacet().should('be.visible')
        
        this.items.brakeRotorsAndDrumsFilterCount().invoke('text')
        .then(filterCount=>
        {
            this.items.brakeRotorsAndDrumsProductsContainerCount().invoke('text').should("eq", filterCount)
            
            this.items.brakeRotorsAndDrumsPaginationCount().invoke('text')
            .then(paginationText=>
            {
                let paginationCount = paginationText.split(' ')[3]
                expect(paginationCount).to.eq(filterCount)
            })
        })

        ////////////////////////////////////////////////////
        // this.items.products().then(products=>
        // {
        //     cy.wrap(products.length).as('productsCount')
        // })
        
        // this.items.paginationNext().then(elem=>
        // {
        //     while(elem.hasClass('disabled') == false)
        //     // for(var i = 1; i <= 3; i++)
        //     {
        //         cy.log(elem.hasClass('disabled'))
        //         cy.wait(10000)
        //         this.items.paginationNext().click()

        //         this.items.products().then(products=>
        //         {
        //             cy.get('@productsCount').then(pc=>
        //             {
        //                 cy.wrap(pc + products.length).as('productsCount')
        //             })
        //         })
        //     }
        // })
        
        // cy.get('@productsCount').then(pc=>
        // {
        //     cy.log(pc)
        // })
    }

    priceFiltered(minPrice, maxPrice)
    {
        this.items.retailPriceFacet().should('be.visible')

        let content = '$' + minPrice + ' - $' + maxPrice
        this.items.retailPriceFacet().should('have.text', content)
    }

    // Sorting rotors by By Customer Rating
    rotorsSortedByCustomerRating()
    {
        cy.url().should('include', '/f/?sort=Customer%20Rating')

        // 
        
        this.items.firstRotorCustomerRatingItem()
        .then(elem=>
        {
            // let rating = elem.text().substring(1, 4)
            // if(isNaN(rating))
            // {
            //     rating = rating.substring(0, 2)
            // }
            // cy.log('QQQQQQQQQQQQQQQQQQQQ ' + rating)


            let rating = elem.text().replace('(', '').replace('+', '').replace(')', '')
            cy.wrap(parseInt(rating)).as('previousRating')
        })

        this.items.allRotorCustomerRatingItems()
        .each(elem =>
        {
            let rating = parseInt(elem.text().replace('(', '').replace('+', '').replace(')', ''))

            cy.get('@previousRating').should('be.gte', rating)

            cy.wrap(rating).as('previousRating')
        })
    }




    
///////////////////////////////////////////////////////////////
    // BrakeRotorsAndDrumsFiltered()
    // {
    //     this.items.brakeRotorsAndDrumsFacet().should('be.visible')
        
    //     this.items.brakeRotorsAndDrumsFilterCount().invoke('text')
    //     .then(filterCount=>
    //     {
    //         this.items.brakeRotorsAndDrumsProductsContainerCount().invoke('text').should("eq", filterCount)
            
    //         this.items.brakeRotorsAndDrumsPaginationCount().invoke('text')
    //         .then(paginationText=>
    //         {
    //             let paginationCount = paginationText.split(' ')[3]
    //             expect(paginationCount).to.eq(filterCount)
    //         })
    //     })



    //     // let productsCount = this.items.products()


    //     cy.wrap(0).as('productsCount')
    //     for(;;)
    //     {
    //         this.items.products().then(products=>
    //         {
    //             cy.get('@productsCount').then(pc=>
    //             {
    //                 cy.wrap(pc + products.length).as('productsCount')
    //             })
    //         })

    //         this.items.paginationNext().then(elem=>
    //         {
    //             if(elem.hasClass('disabled'))
    //             {
    //                 break;
    //             }
    //             else
    //             {
    //                 this.items.paginationNext().click()
    //             }
    //         })
    //     }
    //     cy.log('QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQqqqqqqqqqqq')
    //     cy.get('@productsCount').then(pc=>
    //     {
    //         cy.log(pc)
    //     })
    // }


///////////////////


    // BrakeRotorsAndDrumsFiltered()
    // {
    //     // this.items.brakeRotorsAndDrumsFilterCount().invoke('text').as('BrakeRotorsAndDrumsFilterCount')
    //     // cy.get('@BrakeRotorsAndDrumsFilterCount').then((count)=>{cy.log(count)})
    // }
}
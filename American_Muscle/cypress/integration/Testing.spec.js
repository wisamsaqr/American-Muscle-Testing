/// <reference types="cypress" />

import { HomePage } from "./pageObjecs/homePage/page";
import { CamaroAccessoriesPartsPage } from "./pageObjecs/camaroAccessoriesParts/page";
import { CamaroRotorsPage } from "./pageObjecs/camaroRotors/page";

import { CatalogRequestModal } from "./pageObjecs/components/catalogRequestModal/modal";

describe("American Muscle Testing",()=>
{
    let homePage = new HomePage()
    let camaroAccessoriesPartsPage = new CamaroAccessoriesPartsPage()
    let camaroRotorsPage = new CamaroRotorsPage()

    let catalogRequestModal = new CatalogRequestModal()
    
    before('Configurations', ()=>
    {
        // Preserve cookie in every test
        // Cypress.Cookies.defaults({preserve: (cookie) => { return true; }})
    })

    it('Verifying visiting "American Muscle" homepage', ()=>
    {
        // // Visiting "American Muscle" homepage
        // homePage.actions.visit()
        // homePage.tests.pageVisited()
    })

    // beforeEach('Closing Modal', ()=>
    // {
    //     // Closing Camaro Catalog Request Modal
    //     // if (catalogRequestModal.items.freeCamaroCatalogRequestModal().length > 0)
    //     // if (cy.get('div.marketing_modal > div.marketing_modal').length > 0)
    //     // {
    //     //     catalogRequestModal.actions.closeFreeCamaroCatalogRequestModal()
    //     //     catalogRequestModal.tests.freeCamaroCatalogRequestModalHidden()
    //     // }
    // })

    it("Verifying Choosing 'Camaro Vehicle (2016-2022)' from the home page's Main Banner", ()=>
    {
        // // Choosing 'Camaro Vehicle'
        // homePage.actions.clickCamaroShopNavItem()
        // homePage.tests.camaroShopNavItemClicked()

        // // Choosing '(2016-2022)'
        // homePage.actions.clickCamaro2016_2022ShopNavItem()
        // camaroAccessoriesPartsPage.tests.pageVisited()
    })

    it("Verifying navigating to 2016-2022 Camaro Rotors", ()=>
    {
        // camaroAccessoriesPartsPage.actions.clickRotorsNavItem()
        // camaroRotorsPage.tests.pageVisited()
    })

    context('Closing Camaro Catalog Request Modal,'
        + ' Filtering rotors by "Brake Rotors and Drums,"'
        + ' filtering rotors by "Brake Rotors and Drums"'
        + 'then Sorting rotors by "Customer Rating"', ()=>
    {
        it('Closing Camaro Catalog Request Modal', ()=>
        {
            cy.visit('https://www.americanmuscle.com/2016-camaro-rotors.html') // *** //
            // // Closing Camaro Catalog Request Modal
            // catalogRequestModal.items.freeCamaroCatalogRequestModal()
            // .then(elem=>
            // {
            //     if(elem.length > 0)
            //     {
            //         catalogRequestModal.actions.closeFreeCamaroCatalogRequestModal()
            //         catalogRequestModal.tests.freeCamaroCatalogRequestModalHidden()
            //     }
            // })
        })

        it('Verify Filtering rotors by "Brake Rotors and Drums"', ()=>
        {
            // Applying "Brake Rotors and Drums" filter
            // camaroRotorsPage.actions.clickBrakeRotorsAndDrumsFilter()
            // camaroRotorsPage.tests.brakeRotorsAndDrumsFiltered()
        })

        it('Verify Applying price filter', ()=>
        {
            // Applying Price filter
            // cy.fixture('./data.json').then(data=>
            // {
            //     camaroRotorsPage.actions.fillMin_priceInput(data.minPrice)
            //     camaroRotorsPage.actions.fillMax_priceInput(data.maxPrice)

            //     camaroRotorsPage.actions.clickLimitPriceGoButton()
            
            //     camaroRotorsPage.tests.priceFiltered(data.minPrice, data.maxPrice)
            // })





            
            // Sorting Monitors Items By Price Ascendingly
            // monitorsPage.actions.sortMonitorsItemsByPriceAscendingly()
            // monitorsPage.tests.sortingMonitorsUrl()
            
            // cy.wait(3000)
            // monitorsPage.tests.monitorsItemsSortedByPriceAscendingly()
        })

        it('Sorting rotors by "Customer Rating"',  ()=>
        {
            camaroRotorsPage.actions.sortProductByCustomerRating()
            cy.wait(3000)
            camaroRotorsPage.tests.rotorsSortedByCustomerRating()

            



            
            
            // cy.get('div[data-qatgt="rating"] + p > span').first().invoke('text').then(elem=>
            // {
            //     cy.log(elem)
            // })
        })
    })
})
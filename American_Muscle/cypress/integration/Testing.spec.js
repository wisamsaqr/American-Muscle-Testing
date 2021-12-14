/// <reference types="cypress" />

import { HomePage } from "./pageObjecs/homePage/page";
import { CamaroAccessoriesPartsPage } from "./pageObjecs/camaroAccessoriesParts/page";
import { CamaroRotorsPage } from "./pageObjecs/camaroRotors/page";

describe("American Muscle Testing",()=>
{
    let homePage = new HomePage()
    let camaroAccessoriesPartsPage = new CamaroAccessoriesPartsPage()
    let camaroRotorsPage = new CamaroRotorsPage()
    
    before('Configurations', ()=>
    {
        // Preserve cookie in every test
        // Cypress.Cookies.defaults({preserve: (cookie) => { return true; }})
    })
    
    it('Verifying visiting "American Muscle" homepage', ()=>
    {
        // Visiting "American Muscle" homepage
        homePage.actions.visit()
        homePage.tests.pageVisited()
    })

    it("Verifying Choosing 'Camaro Vehicle (2016-2022)' from the home page's Main Banner", ()=>
    {
        // Choosing 'Camaro Vehicle'
        homePage.actions.clickCamaroShopNavItem()
        homePage.tests.camaroShopNavItemClicked()

        // Choosing '(2016-2022)'
        homePage.actions.clickCamaro2016_2022ShopNavItem()
        camaroAccessoriesPartsPage.tests.pageVisited()

        // Closing Camaro Catalog Request Modal
        camaroAccessoriesPartsPage.actions.closeFreeCamaroCatalogRequestModal()
        camaroAccessoriesPartsPage.tests.freeCamaroCatalogRequestModalHidden()
    })

    it("Verifying navigating to 2016-2022 Camaro Rotors", ()=>
    {
        camaroAccessoriesPartsPage.actions.clickRotorsNavItem()
        camaroRotorsPage.tests.pageVisited()
    })

    // context('Navigating to monitors page'
    //     +' then selecting asus filter'
    //     +' and sorting the results by price ascendingly',
    // ()=>
    // {
    //     it('Verify navigating to monitors page', ()=>
    //     {
    //         // Navigating to monitors page
    //         monitorsPage.tests.pageUrl()
    //         monitorsPage.tests.breadcrumbEndsWithMonitorsText()
    //         monitorsPage.tests.pageTitleHasMonitorsText()
    //     })

    //     it('Verify selecting asus filter', ()=>
    //     {
    //         // Selecting asus filter
    //         monitorsPage.actions.clickAsusFilterCheckbox()
    //         monitorsPage.tests.asusFilterUrl()

    //         // Sorting Monitors Items By Price Ascendingly
    //         monitorsPage.actions.sortMonitorsItemsByPriceAscendingly()
    //         monitorsPage.tests.sortingMonitorsUrl()
            
    //         cy.wait(3000)
    //         monitorsPage.tests.monitorsItemsSortedByPriceAscendingly()
    //     })
    // })
})
/// <reference types="cypress" />

import { HomePage } from "./pageObjecs/homePage/page";


describe("American Muscle Testing",()=>
{
    let homePage = new HomePage()
    
    before('Configurations', ()=>
    {
        // Preserve cookie in every test
        // Cypress.Cookies.defaults({preserve: (cookie) => { return true; }})
    })
    
    it('Verifying visiting "American Muscle" homepage', ()=>
    {
        // Visiting "American Muscle" homepage
        homePage.actions.navigate()
        homePage.tests.pageVisited()
    })

    it("Verifying Choosing 'Camaro Vehicle (2016-2022)' from the home page's Main Banner", ()=>
    {
        // Choosing 'Camaro Vehicle'
        homePage.actions.clickCamaroShopNavItem()
        homePage.tests.camaroShopNavItemClicked()

        // Choosing '(2016-2022)'
        homePage.actions.clickCamaro2016_2022ShopNavItem()
        homePage.tests.camaroShop2016_2022NavItemClicked()

        // Closing Camaro Catalog Request Modal
        homePage.actions.closeFreeCamaroCatalogRequestModal()
    })

    // it("Verifying navigating to All Categories page", ()=>
    // {
    //     // Navigating to All Categories page
    //     allCategoriesPage.tests.pageUrl()
    //     allCategoriesPage.tests.allCategoriesNavItemSelected()
    //     allCategoriesPage.tests.mainTitleHasAllCategoriesText()

    //     allCategoriesPage.actions.clickMonitorsCategory()
    // })

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
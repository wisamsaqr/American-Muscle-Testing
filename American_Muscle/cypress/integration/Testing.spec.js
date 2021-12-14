/// <reference types="cypress" />

import { HomePage } from "./pageObjecs/homePage/page";
// import { AllCategoriesPage } from "./pageObjecs/allCategoriesPage/page";
// import { MonitorsPage } from "./pageObjecs/monitorsPage/page";


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
        homePage.tests.pageUrl()
    })

    // it("Verifying Choosing 'Camaro Vehicle (2016-2022)' from the home page's Main Banner", ()=>
    // {
    //     // Choosing 'Camaro Vehicle (2016-2022)'
    //     camaroShopNavItem
    //     homePage.actions.clickAllCategoriesNavItem()
    //     homePage.tests.pageUrl()
    // })

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
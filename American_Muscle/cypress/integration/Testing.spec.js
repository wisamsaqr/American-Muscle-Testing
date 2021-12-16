/// <reference types="cypress" />

import { HomePage } from "./pageObjecs/homePage/page";
import { CamaroAccessoriesPartsPage } from "./pageObjecs/camaroAccessoriesParts/page";
import { CamaroRotorsPage } from "./pageObjecs/camaroRotors/page";

import { CatalogRequestModal } from "./pageObjecs/components/catalogRequestModal/modal";

import { ProductDetailsPage } from "./pageObjecs/productDetails/page";
import { SavedProductsPage } from "./pageObjecs/savedProducts/page";
import { ShoppingCartPage } from "./pageObjecs/shoppingCart/page";

describe("American Muscle Testing",()=>
{
    let waitingTime = 10000

    let homePage = new HomePage()
    let camaroAccessoriesPartsPage = new CamaroAccessoriesPartsPage()
    let camaroRotorsPage = new CamaroRotorsPage()

    let catalogRequestModal = new CatalogRequestModal()

    let productDetailsPage = new ProductDetailsPage()
    let savedProductsPage = new SavedProductsPage()
    let shoppingCartPage = new ShoppingCartPage()
    
    beforeEach('Configurations', ()=>
    {
        // Preserve cookie
        Cypress.Cookies.defaults({preserve: (cookie) => { return true; }})
    })

    it('Verifying visiting "American Muscle" homepage', ()=>
    {
        // Visiting "American Muscle" homepage
        homePage.actions.visit()
        homePage.tests.pageVisited()
    })

    it("Verifying Choosing 'Camaro Vehicle (2016-2022)' from the home page's Main Banner", ()=>
    {
        cy.wait(waitingTime)
        // Choosing 'Camaro Vehicle'
        homePage.actions.clickCamaroShopNavItem()
        homePage.tests.camaroShopNavItemClicked()

        cy.wait(waitingTime)
        // Choosing '(2016-2022)'
        homePage.actions.clickCamaro2016_2022ShopNavItem()
        camaroAccessoriesPartsPage.tests.pageVisited()
    })

    it("Verifying navigating to 2016-2022 Camaro Rotors", ()=>
    {
        // Navigating to 2016-2022 Camaro Rotors
        camaroAccessoriesPartsPage.actions.clickRotorsNavItem()
        camaroRotorsPage.tests.pageVisited()
    })

    context('Closing Camaro Catalog Request Modal,'
        + ' filtering rotors by Brake Rotors and Drums,'
        + ' filtering rotors by Price'
        + ' then sorting rotors by "Customer Rating"', ()=>
    {
        it('Verifying closing Camaro Catalog Request Modal', ()=>
        {
            // Closing Camaro Catalog Request Modal
            cy.wait(60000)
            catalogRequestModal.items.freeCamaroCatalogRequestModal()
            .then(elem=>
            {
                if(elem.length > 0)
                {
                    catalogRequestModal.actions.closeFreeCamaroCatalogRequestModal()
                    catalogRequestModal.tests.freeCamaroCatalogRequestModalHidden()
                }
            })
        })

        it('Verify Filtering rotors by "Brake Rotors and Drums"', ()=>
        {
            // Applying "Brake Rotors and Drums" filter
            camaroRotorsPage.actions.clickBrakeRotorsAndDrumsFilter()
            cy.wait(waitingTime)

            camaroRotorsPage.tests.brakeRotorsAndDrumsFiltered()
        })

        it('Verify Applying price filter', ()=>
        {
            // Applying Price filter
            cy.fixture('./data.json').then(data=>
            {
                camaroRotorsPage.actions.fillMinPriceInput(data.minPrice)
                camaroRotorsPage.actions.fillMaxPriceInput(data.maxPrice)
                camaroRotorsPage.actions.clickLimitPriceGoButton()
                cy.wait(waitingTime)

                camaroRotorsPage.tests.priceFiltered(data.minPrice, data.maxPrice)
            })
        })

        it('Sorting rotors by "Customer Rating"',  ()=>
        {
            // Sorting rotors by Customer Rating
            camaroRotorsPage.actions.sortProductByCustomerRating()
            cy.wait(waitingTime)

            camaroRotorsPage.tests.rotorsSortedByCustomerRating()
        })
    })

    it('Opening product with highest customre rating',  ()=>
    {
        // Opening product with highest customre rating
        camaroRotorsPage.actions.clickProductWithHighestCustomreRating()
        
        productDetailsPage.tests.pageVisited()
    })

    it('Adding the product to the saved products list',  ()=>
    {
        // cy.visit('https://www.americanmuscle.com/sp-performance-camaro-diamond-slot-rotors-gray-zrc-front-d55-2154.html')  // XXXXXXXXXXXXXXXXXX
        cy.wait(waitingTime)
        // Adding the product to the saved products list
        productDetailsPage.actions.clickSaveForLaterButton()
        productDetailsPage.tests.saveForLaterLoginModalDisplayed()

        cy.fixture('./data.json').then(data=>
        {
            productDetailsPage.actions.submitSaveForLaterLoginModal(data.email)
        })
        productDetailsPage.tests.saveForLaterLoginModalHidden()
        productDetailsPage.tests.saveForLaterSavedMessageDisplayed()
    })

    it('Navigating to "Saved Products" page',  ()=>
    {
        cy.wait(waitingTime)
        // Navigating to "Saved Products" page
        productDetailsPage.actions.clickSavedProductsMenuItem()
        savedProductsPage.tests.pageVisited()
    })

    it('Adding the selected product to cart',  ()=>
    {
        cy.wait(waitingTime)
        // Adding the selected product to cart
        savedProductsPage.actions.clickAddToCartButton()
        cy.wait(waitingTime)

        shoppingCartPage.tests.pageVisited()
    })

    it('Set quantity to 11',  ()=>
    {
        // Set quantity to 11
        shoppingCartPage.actions.selectElevenOptionInQuantityDropdownList()

        shoppingCartPage.tests.elevenOptionInQuantityDropdownListSelected()
    })
})
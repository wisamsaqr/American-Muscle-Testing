import {CamaroRotorsPageItems} from "./items"

export class CamaroRotorsPageActions
{
    constructor()
    {
        this.items = new CamaroRotorsPageItems();
    }

    // Filtering rotors By "Brake Rotors And Drums"
    clickBrakeRotorsAndDrumsFilter()
    {
        this.items.brakeRotorsAndDrumsFilter().click({force: true});
    }

    // Filtering rotors By "Price"
    fillMin_priceInput(minPrice)
    {
        this.items.minPriceInput().type(minPrice);
    }

    fillMax_priceInput(maxPrice)
    {
        this.items.maxPriceInput().type(maxPrice);
    }

    clickLimitPriceGoButton()
    {
        this.items.limitPriceGoButton().click();
    }

    // Sorting rotors By "Customer Rating"
    sortProductByCustomerRating()
    {
        this.items.sortSelect().select('Customer Rating');
    }

    // Opening product with highest customre rating
    clickProductWithHighestCustomreRating()
    {
        this.items.firstRotorItem().invoke('text').as('productWithHighestCustomreRatingName')

        this.items.firstRotorItem().click();
    }
}
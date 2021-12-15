import {CamaroRotorsPageItems} from "./items"

export class CamaroRotorsPageActions
{
    constructor()
    {
        this.items = new CamaroRotorsPageItems();
    }

    clickBrakeRotorsAndDrumsFilter()
    {
        this.items.brakeRotorsAndDrumsFilter().click();
    }
}
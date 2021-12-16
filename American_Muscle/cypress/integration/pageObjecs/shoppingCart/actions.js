import {ShoppingCartPageItems} from "./items"

export class ShoppingCartPageActions
{
    constructor()
    {
        this.items = new ShoppingCartPageItems();
    }

    // Set quantity to 11
    selectElevenOptionInQuantityDropdownList()
    {
        this.items.quantityDropdownListOneOption().then(elem=>
        {
            elem.removeClass('dd-selected')
        })

        this.items.quantityDropdownListElevenOption().then(elem=>
        {
            elem.addClass('dd-selected')
        })
    }
}
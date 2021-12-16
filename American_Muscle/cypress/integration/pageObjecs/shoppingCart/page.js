import {ShoppingCartPageActions} from "./actions"
import {ShoppingCartPageTests} from "./tests"

export class SavedProductsPage
{
    constructor()
    {
        this.actions = new ShoppingCartPageActions()
        this.tests = new ShoppingCartPageTests()
    }
}
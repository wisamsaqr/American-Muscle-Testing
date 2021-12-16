import {ShoppingCartPageActions} from "./actions"
import {ShoppingCartPageTests} from "./tests"

export class ShoppingCartPage
{
    constructor()
    {
        this.actions = new ShoppingCartPageActions()
        this.tests = new ShoppingCartPageTests()
    }
}
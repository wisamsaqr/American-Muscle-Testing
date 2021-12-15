import {SavedProductsPageActions} from "./actions"
import {SavedProductsPageTests} from "./tests"

export class SavedProductsPage
{
    constructor()
    {
        this.actions = new SavedProductsPageActions()
        this.tests = new SavedProductsPageTests()
    }
}
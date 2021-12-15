import {ProductDetailsPageActions} from "./actions"
import {ProductDetailsPageTests} from "./tests"

export class ProductDetailsPage
{
    constructor()
    {
        this.actions = new ProductDetailsPageActions()
        this.tests = new ProductDetailsPageTests()
    }
}
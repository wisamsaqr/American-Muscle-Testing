import {CamaroAccessoriesPartsPageActions} from "./actions"
import {CamaroAccessoriesPartsPageTests} from "./tests"

export class CamaroAccessoriesPartsPage
{
    constructor()
    {
        this.actions = new CamaroAccessoriesPartsPageActions()
        this.tests = new CamaroAccessoriesPartsPageTests()
    }
}
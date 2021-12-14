import {CamaroRotorsPageActions} from "./actions"
import {CamaroRotorsPageTests} from "./tests"

export class CamaroRotorsPage
{
    constructor()
    {
        this.actions = new CamaroRotorsPageActions()
        this.tests = new CamaroRotorsPageTests()
    }
}
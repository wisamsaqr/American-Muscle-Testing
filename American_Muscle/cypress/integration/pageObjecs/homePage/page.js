import {HomePageItems} from "./items"
import {HomePageActions} from "./actions"
import {HomePageTests} from "./tests"

export class HomePage
{
    constructor()
    {
        this.items = new HomePageItems()
        this.actions = new HomePageActions()
        this.tests = new HomePageTests()
    }
}
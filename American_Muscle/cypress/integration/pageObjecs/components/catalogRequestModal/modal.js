import {CatalogRequestModalItems} from "./items"
import {CatalogRequestModalActions} from "./actions"
import {CatalogRequestModalTests} from "./tests"

export class CatalogRequestModal
{
    constructor()
    {
        this.items = new CatalogRequestModalItems()
        this.actions = new CatalogRequestModalActions()
        this.tests = new CatalogRequestModalTests()
    }
}
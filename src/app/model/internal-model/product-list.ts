import { Product } from "../model-from-api/product";
import { InternalProduct } from "./internal-product"

/*
   This class deals with the user's selection of products.
*/

export class ProductList {


    products: InternalProduct[]
    numberOfSelectedItems: number

    // initial state : no product is selected by the user
    constructor(productsFromAPI: Product[]) {
        this.products = []
        for (let productFromApi of productsFromAPI) {
            this.products.push(new InternalProduct(productFromApi))
        }
        this.numberOfSelectedItems = 0
    }

    // accept the change only if newQuantity is valid.
    // similar check in the quantity-selector component
    changeQuantityForProductWithId(id: number, newQuantity: number) {
        let p = this.getProductById(id)
        if ((newQuantity > 0) && newQuantity <= p.stockpiled) {
            p.quantity = newQuantity
        }
    }

    getProductById(id: number): InternalProduct {
        return this.products.find(p => p.productID === id)!
    }

    handleProductSelectionChangeWithId(id: number, selected: boolean) {
        if (selected) {
            this.selectProductWithId(id)
        } else {
            this.deselectProductWithId(id)
        }
    }

    deselectProductWithId(id: number): void {
        let p = this.getProductById(id)
        if (p.isSelected) {
            p.isSelected = false
            this.numberOfSelectedItems--
        }
    }

    selectProductWithId(id: number): void {
        let p = this.getProductById(id)
        if (!p.isSelected) {
            p.isSelected = true
            this.numberOfSelectedItems++
        }
    }

}
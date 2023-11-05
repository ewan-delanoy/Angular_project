import { Product } from "../model-from-api/product";
import { ProductType } from "../model-from-api/product-type";

/*
   This class is mostly identical to its Product counterpart,
   except for  :
   -the added "isSelected" and "quantity" properties
   -the "productType" property  which is now a productType instead of a string
   

*/

export class InternalProduct {

    productID: number
    name: string
    productType: ProductType // is a string in the API version
    unitPrice: number
    description: string
    stockpiled: number
    isSelected: boolean // convenience, not in the API version
    quantity: number // convenience, not in the API version

    constructor(p: Product) {
        // inherit everything from p
        this.productID = p.productID
        this.name = p.name
        this.productType = (p.productType as ProductType)
        this.unitPrice = p.unitPrice
        this.description = p.description
        this.stockpiled = p.stockpiled
        // set default values for the other parameters 
        this.isSelected = false
        this.quantity = 1
    }
}
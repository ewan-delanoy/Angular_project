
import { largeNumber } from "../../constants"
import { ProductType } from "../model-from-api/product-type"
import { InternalProduct } from "./internal-product"
import { Product } from "../model-from-api/product"
import { OrderDetails } from "../model-from-api/order-details"

/*
   This class is mostly identical to its OrderDetails counterpart,
   except for  :
   -the added "totalPrice" property
   -the "productType" property  which is now a ProductType instead of a string
   -the "counter" static property used to handle unique IDs in the local database

   Some nontrivial code is needed to deal with the two different constructors: 
   the constructor from scratch and the converter from the API counterpart.

   In the constructor implementation, we successively set the orderDetailID,
   determine the associated product, and the rest follows easily

*/

export class InternalOrderDetails {
    orderDetailID: number
    quantity: number
    unitPrice: number
    productID: number
    orderID: number

    productName: string
    productType: ProductType // is a string in the API version
    totalPrice: number // convenience, not in the API version
    static counter: number = largeNumber // manages IDs in our local database

    // constructor used on the confirm-command page
    constructor(p: InternalProduct, orderID: number)
    // constructor used on the show-orders page
    constructor(orderDetailFromApi: OrderDetails, productsFromApi: Product[])


    constructor(firstArg: InternalProduct | OrderDetails, secondArg: number | Product[]) {
        const simplestCase = (firstArg instanceof InternalProduct)

        // if already present in the API, we take it ; otherwise we make our own
        this.orderDetailID =
            simplestCase ? (InternalOrderDetails.counter++) :
                (firstArg as OrderDetails).orderDetailID

        // if already present in the API, we take it ; otherwise we make our own        
        this.orderID =
            simplestCase ? (secondArg as number) : firstArg!.orderID
        let p: InternalProduct // the unique product associated with the order detail
        if (simplestCase) {
            p = (firstArg as InternalProduct)
        } else {
            let id = (firstArg as OrderDetails).productID
            let productFromApi = (secondArg as Product[]).find(
                (q) => q.productID === id
            ) as Product
            p = new InternalProduct(productFromApi)
        }

        this.quantity = simplestCase ? p.quantity : (firstArg as OrderDetails).quantity
        this.unitPrice = p.unitPrice
        this.productID = p.productID
        this.productName = p.name
        this.productType = p.productType

        this.totalPrice = p.quantity * p.unitPrice
    }

}

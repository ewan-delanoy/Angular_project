import { InternalOrderDetails } from "./internal-order-details"
import { OrderState } from "../model-from-api/order-state"
import { largeNumber, uniqueClientID } from "../../constants"
import { ProductList } from "./product-list"
import { Product } from "../model-from-api/product"
import { Order } from "../model-from-api/order"

/*
   This class is mostly identical to its Order counterpart,
   except for  :
   -the added "totalPrice" and "numberOfItems" properties
   -the "orderState" property  which is now an OrderState instead of a string
   -the "creationDateTime" and "lastModifiedDateTime" which are now Dates instead of strings
   -the "counter" static property used to handle unique IDs in the local database

   Some nontrivial code is needed to deal with the three different constructors: 
   the default constructor, the constructor from scratch and the converter from the API counterpart.

   For the default constructor, all that matters is that the orderDetails
   property be []. 

*/

export class InternalOrder {
    orderID: number
    orderDetails: InternalOrderDetails[]
    orderState: OrderState // is only a string in the API version
    creationDateTime: Date  // is only a string in the API version
    lastModifiedDateTime: Date  // is only a string in the API version
    clientID: string

    totalPrice: number = 0 // convenience, not in the API version
    numberOfItems: number = 0 // convenience, not in the API version
    static counter: number = largeNumber // manges IDs in our local databse

    // used for the default, empty value 
    constructor()
    // constructor from scratch, used on the confirm-command page
    constructor(list: ProductList)
    // constructor (really a converter) used on the show-orders page
    constructor(orderFromApi: Order, productsFromApi: Product[])


    constructor(firstArg?: ProductList | Order, productsFromApi?: Product[]) {
        // identical beginning for all three constructors
        this.orderID = productsFromApi ? ((firstArg as Order).orderID) : (InternalOrder.counter++)
        this.totalPrice = 0
        this.numberOfItems = 0
        this.orderDetails = []

        // if we are in the constructor-from-scratch case, 
        // we extract some information from the selected products in the list
        if (firstArg instanceof ProductList) {
            let list = (firstArg as ProductList)
            for (let p of list.products) {
                if (p.isSelected) {
                    let orderDetails = new InternalOrderDetails(p, this.orderID)
                    this.orderDetails.push(orderDetails)
                    this.totalPrice = orderDetails.totalPrice + this.totalPrice
                    this.numberOfItems = (orderDetails.quantity as number) +
                        (this.numberOfItems as number)
                }
            }
        }

        // if we are in the converter case, 
        // we transfer some information from the API order to be converted
        if (productsFromApi) {
            let detailsFromApi = (firstArg as Order).orderDetails
            for (let detailFromApi of detailsFromApi) {
                let orderDetails = new InternalOrderDetails(detailFromApi, productsFromApi)
                this.totalPrice = orderDetails.totalPrice + this.totalPrice
                this.numberOfItems = (orderDetails.quantity as number) +
                    (this.numberOfItems as number)
            }
        }
        this.orderState = productsFromApi ? ((firstArg as Order).orderState as OrderState) : OrderState.Draft
        // dealing with dates
        this.creationDateTime = new Date()
        this.lastModifiedDateTime = this.creationDateTime
        if (productsFromApi) {
            let orderFromApi: Order = (firstArg as Order)
            this.creationDateTime = new Date(Date.parse(orderFromApi.creationDateTime))
            this.lastModifiedDateTime = new Date(Date.parse(orderFromApi.lastModifiedDateTime))
        }
        // when we get here dates are set correctly
        this.clientID = uniqueClientID
    }
}

import { OrderDetails } from "./order-details"

export interface Order {
    orderID: number
    orderDetails: OrderDetails[]
    orderState: string // we will convert it internally to OrderState
    creationDateTime: string
    lastModifiedDateTime: string
    clientID: string
}

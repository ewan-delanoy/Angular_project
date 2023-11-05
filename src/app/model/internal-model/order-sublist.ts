import { OrderState } from "../model-from-api/order-state"
import { InternalOrder } from "./internal-order"

/*
Collecting all orders in a given state
*/

export interface OrderSublist {
    criterion: OrderState
    sublist: InternalOrder[]
}
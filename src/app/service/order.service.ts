import { Injectable } from '@angular/core';
import { InternalOrder } from '../model/internal-model/internal-order';
import { ApiCallerService } from './api-caller.service';
import { Observable, combineLatest, forkJoin, map, of, switchMap } from 'rxjs';
import { Product } from '../model/model-from-api/product';
import { Order } from '../model/model-from-api/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: InternalOrder[] = []
  constructor(private apiCallerService: ApiCallerService) { }

  addNewOrder(newOrder: InternalOrder) {
    this.orders.push(newOrder)
  }

  getOrders(): Observable<InternalOrder[]> {
    /*
    This is complex because our first request to the API
    only returns a list of incomplete order objects (their
    orderDetails property is null).
    We then have to make a whole loop of other API calls
    to getOrderById (with switchMap) to get the complete orders
    */

    let productsFromApi$: Observable<Product[]> = this.apiCallerService.getProducts()
    let incompleteOrdersFromApi$: Observable<Order[]> = this.apiCallerService.getIncompleteOrders()

    let ordersFromApi$: Observable<Order[]> = incompleteOrdersFromApi$.pipe(
      switchMap(
        incompleteOrdersFromApi => {
          const orderIds = incompleteOrdersFromApi.map(o => o.orderID)
          return combineLatest(
            orderIds.map(orderId => this.apiCallerService.getOrderById(orderId))
          )
        }
      )
    )

    return forkJoin([productsFromApi$, ordersFromApi$]).pipe(
      map(
        (res) => {
          let productsFromApi: Product[] = res[0]
          let ordersFromApi: Order[] = res[1]
          let ordersConvertedFromApi: InternalOrder[] = []
          for (let orderFromApi of ordersFromApi) {
            let convertedOrder = new InternalOrder(orderFromApi, productsFromApi)
            ordersConvertedFromApi.push(convertedOrder)
          }
          return this.orders.concat(ordersConvertedFromApi)
        }
      )
    )

  }

}

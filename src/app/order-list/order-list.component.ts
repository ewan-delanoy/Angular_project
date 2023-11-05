import { Component } from '@angular/core';
import { Order } from '../model/model-from-api/order';
import { OrderService } from '../service/order.service';
import { allOrderStates } from '../model/model-from-api/order-state';
import { OrderSublist } from '../model/internal-model/order-sublist';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  sublists: OrderSublist[] = []


  constructor(
    private orderService: OrderService
  ) {
    // create sublists according to state 
    this.orderService.getOrders().subscribe(
      (orders) => {
        this.sublists = []
        for (let state of allOrderStates) {
          this.sublists.push({
            criterion: state,
            sublist: orders.filter(s => s.orderState === state)
          })
        }
      }
    )
  }
}
import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { InternalOrder } from '../model/internal-model/internal-order';
import { OrderState } from '../model/model-from-api/order-state';
import { OrderService } from '../service/order.service';
import { CartState } from '../model/internal-model/cart-state';
import { CacheForUserSelectionService } from '../service/cache-for-user-selection.service';

// this component finalizes the user's order or stores it as a draft

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  order: InternalOrder = new InternalOrder()

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private cacheService: CacheForUserSelectionService
  ) { }

  getState() { return this.cartService.state }

  handleFinalOrder(finalState: OrderState, finalCartState: CartState) {
    this.order.orderState = finalState
    this.orderService.addNewOrder(this.order)
    this.cartService.state = finalCartState
    this.cacheService.isActive = false
  }

  handleOrderConfirmation() {
    this.handleFinalOrder(OrderState.WaitingConfirmation, CartState.SavedAsOrder)
  }
  handleOrderPostpone() {
    this.handleFinalOrder(OrderState.Draft, CartState.SavedAsDraft)
  }

  ngOnInit(): void {
    this.order = this.cartService.current
  }
}

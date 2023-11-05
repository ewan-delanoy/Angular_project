import { Injectable } from '@angular/core';
import { CartState } from '../model/internal-model/cart-state';
import { InternalOrder } from '../model/internal-model/internal-order';

/*
This service stores a recently made order and
allows the transfer of it from the ProductListComponent 
to the CartComponent
*/

@Injectable({
  providedIn: 'root'
})
export class CartService {

  current: InternalOrder = new InternalOrder()
  state: CartState = CartState.EmptyCart
  constructor() { }


}

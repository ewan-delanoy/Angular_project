import { Component, Input } from '@angular/core';
import { OrderSublist } from '../model/internal-model/order-sublist';

@Component({
  selector: 'app-order-sublist',
  templateUrl: './order-sublist.component.html',
  styleUrls: ['./order-sublist.component.css']
})
export class OrderSublistComponent {
  @Input()
  orderSublist!: OrderSublist


}


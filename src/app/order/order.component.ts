import { Component, Input } from '@angular/core';
import { InternalOrder } from '../model/internal-model/internal-order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input()
  order: InternalOrder = new InternalOrder()
}

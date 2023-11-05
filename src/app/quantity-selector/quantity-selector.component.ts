import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent {
  @Input() stockpiled: number = 1
  @Input() quantity: number = 1
  precedingCorrectEnteredValue: number = 1

  @Output() quantityChange = new EventEmitter<number>();

  transmitQuantityChange(e: any) {
    // refuse an invalid value, and replace with preceding correct value
    let proposedValue: number = e.target.value
    if ((proposedValue < 1) || (proposedValue > this.stockpiled)) {
      e.target.value = this.precedingCorrectEnteredValue
    } else {
      this.precedingCorrectEnteredValue = proposedValue
      this.quantity = proposedValue
      this.quantityChange.emit(proposedValue)
    }

  }
}

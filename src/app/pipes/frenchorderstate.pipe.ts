import { Pipe, PipeTransform } from '@angular/core';
import { OrderState } from '../model/model-from-api/order-state';

@Pipe({
  name: 'frenchorderstate'
})
export class FrenchorderstatePipe implements PipeTransform {

  transform(value: OrderState): string {
    switch (value) {
      case OrderState.Draft: return "en brouillon";
      case OrderState.WaitingConfirmation: return "en attente de traitement";
      case OrderState.Confirmed: return "traitées en attente d'envoi";
      case OrderState.InProgress: return "dont l'envoi est en cours";
      case OrderState.Completed: return "livrées";
      case OrderState.Cancelled: return "annulées";
      default: throw new Error("Unknown OrderState");
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frenchdatetime'
})
export class FrenchdatetimePipe implements PipeTransform {

  transform(date: Date): string {
    //return date.toLocaleString('fr-FR');
    return (date.getDay()) + "/" + (date.getMonth()) + "/" + date.getFullYear() + " à " +
      (date.getHours()) + "h" + (date.getMinutes()) + "m" + date.getSeconds() + "s"
  }

}

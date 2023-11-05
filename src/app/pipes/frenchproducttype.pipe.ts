import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from '../model/model-from-api/product-type';

@Pipe({
  name: 'frenchproducttype'
})
export class FrenchproducttypePipe implements PipeTransform {

  transform(value: ProductType): string {
    switch (value) {
      case ProductType.Burger: return "Burger";
      case ProductType.Side: return "Accompagnement";
      case ProductType.Beverage: return "Boisson";
      case ProductType.Dessert: return "Dessert";
      default: throw new Error("Unknown ProductType");
    }
  }

}

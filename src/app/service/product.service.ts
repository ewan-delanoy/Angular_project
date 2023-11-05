import { Injectable } from '@angular/core';
import { ProductList } from '../model/internal-model/product-list';
import { ApiCallerService } from './api-caller.service';
import { Observable, map } from 'rxjs';
import { Product } from '../model/model-from-api/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private apiCallerService: ApiCallerService) { }
  getProductList(): Observable<ProductList> {
    return this.apiCallerService.getProducts().pipe(
      map(
        productsFromApi => {
          return new ProductList(productsFromApi)
        }
      )
    )
  }
  getProductsFromApi(): Observable<Product[]> {
    return this.apiCallerService.getProducts()
  }
}

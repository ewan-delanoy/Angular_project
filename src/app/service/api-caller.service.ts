import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Product } from '../model/model-from-api/product';
import { Order } from '../model/model-from-api/order';
import { Country } from '../model/model-from-api/country';
import { Address } from '../model/model-from-api/address';



@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  addressesUrl = 'https://macmickey.azurewebsites.net/Address';
  countriesUrl = 'https://macmickey.azurewebsites.net/Country';
  ordersUrl = 'https://macmickey.azurewebsites.net/Order';
  productsUrl = 'https://macmickey.azurewebsites.net/Product';

  constructor(private http: HttpClient) { }

  addAddress(newAddress: Address) {
    return this.http
      .post<Address[]>(this.addressesUrl, newAddress)

  }

  getAddresses(): Observable<Address[]> {
    return this.http
      .get<Address[]>(this.addressesUrl)

  }

  getCountries(): Observable<Country[]> {
    return this.http
      .get<Country[]>(this.countriesUrl)

  }

  // They are incomplete because their orderDetails field is null
  getIncompleteOrders(): Observable<Order[]> {
    return this.http
      .get<Order[]>(this.ordersUrl)

  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productsUrl)

  }

  // returns a complete order, unlike getIncompleteOrders
  getOrderById(id: number): Observable<Order> {
    return this.http
      .get<Order>((this.ordersUrl) + "/" + id)
  }

  getProductById(id: number): Observable<Product> {
    return this.http
      .get<Product>((this.productsUrl) + "/" + id)
  }



}

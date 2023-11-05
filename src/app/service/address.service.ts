import { Injectable } from '@angular/core';
import { Address } from '../model/model-from-api/address';
import { ApiCallerService } from './api-caller.service';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private apiCallerService: ApiCallerService) { }

  addNewAddress(newAddress: Address) {
    this.apiCallerService.addAddress(newAddress).subscribe((v: any) => {
      console.log(v)
    })
  }

  getAddresses(): Observable<Address[]> {
    return this.apiCallerService.getAddresses()
  }
}

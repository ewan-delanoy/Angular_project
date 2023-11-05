import { Component } from '@angular/core';
import { AddressService } from '../service/address.service';
import { Address } from '../model/model-from-api/address';


@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent {
  addresses: Address[] = []
  constructor(
    private addressService: AddressService,
  ) { }

  ngOnInit() {
    this.addressService.getAddresses().subscribe(
      (addresses) => {
        this.addresses = addresses
      }
    )
  }
}

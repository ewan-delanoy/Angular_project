import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { uniqueClientID } from '../constants';
import { Address } from '../model/model-from-api/address';
import { AddressService } from '../service/address.service';
import { Country } from '../model/model-from-api/country';
import { CountryService } from '../service/country.service';

/* 
In this reactive form, the most complex part is the dropdown
menu for the user to choose a country. It relies on CountryService
to enumerate the countries
*/
@Component({
  selector: 'app-new-address-form',
  templateUrl: './new-address-form.component.html',
  styleUrls: ['./new-address-form.component.css']
})
export class NewAddressFormComponent {

  // simple regexp, not as complex as the one from Swagger 

  private phonePattern = "^\\+[0-9]{9}$";
  countries: Country[] = []


  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    private countryService: CountryService,
    private router: Router
  ) { }


  addressGroup = this.fb.group({
    streetLine1: [
      '',
      [Validators.required, Validators.minLength(0), Validators.maxLength(255)],
    ],
    streetLine2: [
      '',
      [Validators.minLength(0), Validators.maxLength(255)],
    ],
    zipCode: [
      '',
      [Validators.required, Validators.minLength(0), Validators.maxLength(10)],
    ],
    city: [
      '',
      [Validators.required, Validators.minLength(0), Validators.maxLength(58)],
    ],
    phone: [
      '',
      [Validators.required, /* Validators.pattern(this.phonePattern), */
      Validators.minLength(0), Validators.maxLength(14)],
    ],
    selectedCountry: [
      '',
      [Validators.required],
    ]
  });

  ngOnInit() {
    this.countryService.getCountries().subscribe(
      (countries) => {
        this.countries = countries
      }
    )
  }

  onSubmit() {
    let dataFromForm = this.addressGroup.value
    let newAddress: Address = {
      addressID: uniqueClientID, // we trust the remote APi to set a correct value later
      streetLine1: (dataFromForm.streetLine1!),
      streetLine2: (dataFromForm.streetLine2 ? dataFromForm.streetLine2 : ""),
      zipCode: (dataFromForm.zipCode!),
      city: (dataFromForm.city!),
      phone: (dataFromForm.phone!),
      countryID: parseInt(dataFromForm.selectedCountry!),
      clientID: uniqueClientID
    }

    this.addressService.addNewAddress(newAddress);
    this.router.navigate(['client/adresses/liste']);
  }
}




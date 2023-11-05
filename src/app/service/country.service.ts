import { Injectable } from '@angular/core';
import { Country } from '../model/model-from-api/country';
import { ApiCallerService } from './api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countries: Country[] = []
  constructor(private apiCallerService: ApiCallerService) { }
  getCountries() {
    return this.apiCallerService.getCountries()
  }
}

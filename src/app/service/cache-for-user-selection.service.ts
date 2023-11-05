import { Injectable } from '@angular/core';
import { ProductList } from '../model/internal-model/product-list';

/*

This service stores a copy of the user's selection
as long as it has not been finalized or saved as a draft.
Allows for a more pleasant user experience

*/

@Injectable({
  providedIn: 'root'
})
export class CacheForUserSelectionService {

  current: ProductList = new ProductList([])
  isActive: boolean = false
  constructor() { }


}

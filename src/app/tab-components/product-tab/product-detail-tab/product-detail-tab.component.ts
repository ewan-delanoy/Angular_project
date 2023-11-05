import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


import { Product } from '../../../model/model-from-api/product';
import { ApiCallerService } from '../../../service/api-caller.service';
import { ProductType, stringAsProductType } from '../../../model/model-from-api/product-type';

@Component({
  selector: 'app-product-detail-tab',
  templateUrl: './product-detail-tab.component.html',
  styleUrls: ['./product-detail-tab.component.css']
})
export class ProductDetailTabComponent {

  product?: Product
  sub?: Subscription
  formalProductType?: ProductType

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiCallerService: ApiCallerService) { }

  ngOnInit() {
    this.sub = this._activatedRoute.paramMap.subscribe((params: any) => {
      const id = parseInt(params.get('id'));
      this._apiCallerService.getProductById(id).subscribe(productFromApi => {
        this.product = productFromApi
        this.formalProductType = stringAsProductType(productFromApi.productType)
        console.log("Here is the formalProductType :", this.formalProductType)
      }
      )
    });

  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }


}


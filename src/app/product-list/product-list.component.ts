import { Component } from '@angular/core';
import { ProductList } from '../model/internal-model/product-list';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { InternalOrder } from '../model/internal-model/internal-order';
import { CartState } from '../model/internal-model/cart-state';
import { ProductService } from '../service/product.service';
import { CacheForUserSelectionService } from '../service/cache-for-user-selection.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  model: ProductList = new ProductList([])

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private cacheService: CacheForUserSelectionService,
    private router: Router) { }



  ngOnInit() {
    // if an user selection has already been made, no need to query the API
    if (this.cacheService.isActive) {
      this.model = this.cacheService.current
    } else {
      this.productService.getProductList().subscribe(
        (productsList) => {
          this.model = productsList
          this.cacheService.current = productsList
          this.cacheService.isActive = true
        }
      )
    }
  }

  enterDetailedMode(id: number) {
    this.router.navigate(['produit/liste/', id])
  }

  goToCart() {
    this.cartService.current = new InternalOrder(this.model)
    this.cartService.state = CartState.JustBegun
    this.router.navigate(['produit/commande'])
  }

  handleSelectionChange(id: number, data: any) {
    this.model.handleProductSelectionChangeWithId(id, data.target.checked)
    // this will persist even when the component is destroyed
    this.cacheService.current.handleProductSelectionChangeWithId(id, data.target.checked)
  }


  handleQuantityChange(id: number, newQuantity: any) {
    this.model.changeQuantityForProductWithId(id, newQuantity)
    // this will persist even when the component is destroyed
    this.cacheService.current.changeQuantityForProductWithId(id, newQuantity)
  }

}

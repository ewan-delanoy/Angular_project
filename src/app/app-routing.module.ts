import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTabComponent } from './tab-components/product-tab/product-tab.component';
import { CustomerTabComponent } from './tab-components/customer-tab/customer-tab.component';
import { ProductListTabComponent } from './tab-components/product-tab/product-list-tab/product-list-tab.component';
import { ProductDetailTabComponent } from './tab-components/product-tab/product-detail-tab/product-detail-tab.component';
import { CartTabComponent } from './tab-components/product-tab/cart-tab/cart-tab.component';
import { OrderTabComponent } from './tab-components/customer-tab/order-tab/order-tab.component';
import { AddressTabComponent } from './tab-components/customer-tab/address-tab/address-tab.component';
import { OrderListTabComponent } from './tab-components/customer-tab/order-tab/order-list-tab/order-list-tab.component';
import { AddressListTabComponent } from './tab-components/customer-tab/address-tab/address-list-tab/address-list-tab.component';
import { AddressNewTabComponent } from './tab-components/customer-tab/address-tab/address-new-tab/address-new-tab.component';




const routes: Routes = [
  // { path: '', pathMatch: 'full', component: EmptyComponent },
  {
    path: 'produit',
    component: ProductTabComponent,
    children: [
      {
        path: 'liste', pathMatch: 'full', component: ProductListTabComponent,
      },
      {
        path: 'liste/:id', component: ProductDetailTabComponent,
      },
      { path: 'commande', component: CartTabComponent }
    ]
  },
  {
    path: 'client',
    component: CustomerTabComponent,
    children: [
      {
        path: 'commandes', component: OrderTabComponent,
        children: [
          { path: 'liste', component: OrderListTabComponent }
        ]
      },
      {
        path: 'adresses', component: AddressTabComponent,
        children: [
          { path: 'liste', component: AddressListTabComponent },
          { path: 'ajout', component: AddressNewTabComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    // ,{ enableTracing: true } // <-- for debugging purposes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

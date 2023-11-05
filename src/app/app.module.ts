import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListTabComponent } from './tab-components/product-tab/product-list-tab/product-list-tab.component';
import { ProductDetailTabComponent } from './tab-components/product-tab/product-detail-tab/product-detail-tab.component';
import { CartTabComponent } from './tab-components/product-tab/cart-tab/cart-tab.component';
import { OrderTabComponent } from './tab-components/customer-tab/order-tab/order-tab.component';
import { AddressTabComponent } from './tab-components/customer-tab/address-tab/address-tab.component';
import { OrderListTabComponent } from './tab-components/customer-tab/order-tab/order-list-tab/order-list-tab.component';
import { AddressListTabComponent } from './tab-components/customer-tab/address-tab/address-list-tab/address-list-tab.component';
import { AddressNewTabComponent } from './tab-components/customer-tab/address-tab/address-new-tab/address-new-tab.component';
import { ProductTabComponent } from './tab-components/product-tab/product-tab.component';
import { CustomerTabComponent } from './tab-components/customer-tab/customer-tab.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSublistComponent } from './order-sublist/order-sublist.component';
import { AddressListComponent } from './address-list/address-list.component';
import { NewAddressFormComponent } from './new-address-form/new-address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { FrenchproducttypePipe } from './pipes/frenchproducttype.pipe';
import { FrenchorderstatePipe } from './pipes/frenchorderstate.pipe';
import { FrenchcountrynamePipe } from './pipes/frenchcountryname.pipe';
import { FrenchdatetimePipe } from './pipes/frenchdatetime.pipe';
import { FrencheuroPipe } from './pipes/frencheuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductTabComponent,
    ProductListTabComponent,
    ProductDetailTabComponent,
    CartTabComponent,
    CustomerTabComponent,
    OrderTabComponent,
    OrderListTabComponent,
    AddressTabComponent,
    AddressListTabComponent,
    AddressNewTabComponent,
    ProductListComponent,
    CartComponent,
    OrderComponent,
    OrderListComponent,
    OrderSublistComponent,
    AddressListComponent,
    NewAddressFormComponent,
    QuantitySelectorComponent,
    FrenchproducttypePipe,
    FrenchorderstatePipe,
    FrenchcountrynamePipe,
    FrenchdatetimePipe,
    FrencheuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

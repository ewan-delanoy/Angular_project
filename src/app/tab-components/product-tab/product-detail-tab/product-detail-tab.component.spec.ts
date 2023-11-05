import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailTabComponent } from './product-detail-tab.component';

describe('ProductDetailTabComponent', () => {
  let component: ProductDetailTabComponent;
  let fixture: ComponentFixture<ProductDetailTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailTabComponent]
    });
    fixture = TestBed.createComponent(ProductDetailTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

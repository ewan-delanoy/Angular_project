import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListTabComponent } from './order-list-tab.component';

describe('OrderListTabComponent', () => {
  let component: OrderListTabComponent;
  let fixture: ComponentFixture<OrderListTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderListTabComponent]
    });
    fixture = TestBed.createComponent(OrderListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

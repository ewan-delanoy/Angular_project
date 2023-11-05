import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSublistComponent } from './order-sublist.component';

describe('OrderSublistComponent', () => {
  let component: OrderSublistComponent;
  let fixture: ComponentFixture<OrderSublistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderSublistComponent]
    });
    fixture = TestBed.createComponent(OrderSublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

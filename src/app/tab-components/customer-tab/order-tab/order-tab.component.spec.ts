import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTabComponent } from './order-tab.component';

describe('OrderTabComponent', () => {
  let component: OrderTabComponent;
  let fixture: ComponentFixture<OrderTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderTabComponent]
    });
    fixture = TestBed.createComponent(OrderTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

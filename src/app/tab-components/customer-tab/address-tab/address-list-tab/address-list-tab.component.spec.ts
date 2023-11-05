import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressListTabComponent } from './address-list-tab.component';

describe('AddressListTabComponent', () => {
  let component: AddressListTabComponent;
  let fixture: ComponentFixture<AddressListTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressListTabComponent]
    });
    fixture = TestBed.createComponent(AddressListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

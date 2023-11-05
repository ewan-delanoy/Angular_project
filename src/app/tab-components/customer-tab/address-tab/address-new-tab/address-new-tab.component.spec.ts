import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressNewTabComponent } from './address-new-tab.component';

describe('AddressNewTabComponent', () => {
  let component: AddressNewTabComponent;
  let fixture: ComponentFixture<AddressNewTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressNewTabComponent]
    });
    fixture = TestBed.createComponent(AddressNewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTabComponent } from './address-tab.component';

describe('AddressTabComponent', () => {
  let component: AddressTabComponent;
  let fixture: ComponentFixture<AddressTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressTabComponent]
    });
    fixture = TestBed.createComponent(AddressTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

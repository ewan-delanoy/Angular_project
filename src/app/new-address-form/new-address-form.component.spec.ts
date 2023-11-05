import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAddressFormComponent } from './new-address-form.component';

describe('NewAddressFormComponent', () => {
  let component: NewAddressFormComponent;
  let fixture: ComponentFixture<NewAddressFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAddressFormComponent]
    });
    fixture = TestBed.createComponent(NewAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

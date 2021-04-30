import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePurchaseComponent } from './phone-purchase.component';

describe('PhonePurchaseComponent', () => {
  let component: PhonePurchaseComponent;
  let fixture: ComponentFixture<PhonePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonePurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

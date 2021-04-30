import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaPurchaseComponent } from './cinema-purchase.component';

describe('CinemaPurchaseComponent', () => {
  let component: CinemaPurchaseComponent;
  let fixture: ComponentFixture<CinemaPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemaPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

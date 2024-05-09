import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdfcDiscountComponent } from './hdfc-discount.component';

describe('HdfcDiscountComponent', () => {
  let component: HdfcDiscountComponent;
  let fixture: ComponentFixture<HdfcDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HdfcDiscountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HdfcDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

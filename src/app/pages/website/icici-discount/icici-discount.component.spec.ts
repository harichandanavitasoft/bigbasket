import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IciciDiscountComponent } from './icici-discount.component';

describe('IciciDiscountComponent', () => {
  let component: IciciDiscountComponent;
  let fixture: ComponentFixture<IciciDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IciciDiscountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IciciDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

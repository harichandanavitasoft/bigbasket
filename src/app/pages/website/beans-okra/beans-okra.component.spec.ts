import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeansOkraComponent } from './beans-okra.component';

describe('BeansOkraComponent', () => {
  let component: BeansOkraComponent;
  let fixture: ComponentFixture<BeansOkraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeansOkraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeansOkraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

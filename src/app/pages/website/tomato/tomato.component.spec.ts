import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatoComponent } from './tomato.component';

describe('TomatoComponent', () => {
  let component: TomatoComponent;
  let fixture: ComponentFixture<TomatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TomatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TomatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

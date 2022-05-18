import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRangeComponent } from './budget-range.component';

describe('BudgetRangeComponent', () => {
  let component: BudgetRangeComponent;
  let fixture: ComponentFixture<BudgetRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

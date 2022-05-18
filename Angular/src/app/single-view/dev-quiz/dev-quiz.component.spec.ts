import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevQuizComponent } from './dev-quiz.component';

describe('DevQuizComponent', () => {
  let component: DevQuizComponent;
  let fixture: ComponentFixture<DevQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerQuizComponent } from './designer-quiz.component';

describe('DesignerQuizComponent', () => {
  let component: DesignerQuizComponent;
  let fixture: ComponentFixture<DesignerQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

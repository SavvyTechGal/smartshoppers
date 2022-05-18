import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerQuizComponent } from './gamer-quiz.component';

describe('GamerQuizComponent', () => {
  let component: GamerQuizComponent;
  let fixture: ComponentFixture<GamerQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamerQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

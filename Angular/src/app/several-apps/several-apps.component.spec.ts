import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeveralAppsComponent } from './several-apps.component';

describe('SeveralAppsComponent', () => {
  let component: SeveralAppsComponent;
  let fixture: ComponentFixture<SeveralAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeveralAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeveralAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

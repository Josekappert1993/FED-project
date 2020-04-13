import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumEnComponent } from './curriculum-en.component';

describe('CurriculumEnComponent', () => {
  let component: CurriculumEnComponent;
  let fixture: ComponentFixture<CurriculumEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

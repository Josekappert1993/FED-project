import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1F1Component } from './schedule-it1-f1.component';

describe('ScheduleIT1F1Component', () => {
  let component: ScheduleIT1F1Component;
  let fixture: ComponentFixture<ScheduleIT1F1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1F1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1F1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

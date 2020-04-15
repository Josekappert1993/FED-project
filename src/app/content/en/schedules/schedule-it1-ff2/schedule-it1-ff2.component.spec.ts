import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1FF2Component } from './schedule-it1-ff2.component';

describe('ScheduleIT1FF2Component', () => {
  let component: ScheduleIT1FF2Component;
  let fixture: ComponentFixture<ScheduleIT1FF2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1FF2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1FF2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

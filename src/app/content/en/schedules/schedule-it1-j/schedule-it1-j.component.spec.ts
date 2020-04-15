import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1JComponent } from './schedule-it1-j.component';

describe('ScheduleIT1JComponent', () => {
  let component: ScheduleIT1JComponent;
  let fixture: ComponentFixture<ScheduleIT1JComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1JComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1JComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

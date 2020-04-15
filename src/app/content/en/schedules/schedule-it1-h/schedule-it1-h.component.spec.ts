import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1HComponent } from './schedule-it1-h.component';

describe('ScheduleIT1HComponent', () => {
  let component: ScheduleIT1HComponent;
  let fixture: ComponentFixture<ScheduleIT1HComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1HComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1GComponent } from './schedule-it1-g.component';

describe('ScheduleIT1GComponent', () => {
  let component: ScheduleIT1GComponent;
  let fixture: ComponentFixture<ScheduleIT1GComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1GComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1GComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1CComponent } from './schedule-it1-c.component';

describe('ScheduleIT1CComponent', () => {
  let component: ScheduleIT1CComponent;
  let fixture: ComponentFixture<ScheduleIT1CComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1CComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

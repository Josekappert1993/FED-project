import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1BComponent } from './schedule-it1-b.component';

describe('ScheduleIT1BComponent', () => {
  let component: ScheduleIT1BComponent;
  let fixture: ComponentFixture<ScheduleIT1BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

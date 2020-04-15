import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1AComponent } from './schedule-it1-a.component';

describe('ScheduleIT1AComponent', () => {
  let component: ScheduleIT1AComponent;
  let fixture: ComponentFixture<ScheduleIT1AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

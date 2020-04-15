import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1EComponent } from './schedule-it1-e.component';

describe('ScheduleIT1EComponent', () => {
  let component: ScheduleIT1EComponent;
  let fixture: ComponentFixture<ScheduleIT1EComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1EComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

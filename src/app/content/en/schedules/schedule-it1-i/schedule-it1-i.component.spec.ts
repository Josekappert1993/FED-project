import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1IComponent } from './schedule-it1-i.component';

describe('ScheduleIT1IComponent', () => {
  let component: ScheduleIT1IComponent;
  let fixture: ComponentFixture<ScheduleIT1IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

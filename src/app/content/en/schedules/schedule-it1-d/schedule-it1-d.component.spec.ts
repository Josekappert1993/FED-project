import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleIT1DComponent } from './schedule-it1-d.component';

describe('ScheduleIT1DComponent', () => {
  let component: ScheduleIT1DComponent;
  let fixture: ComponentFixture<ScheduleIT1DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleIT1DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleIT1DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

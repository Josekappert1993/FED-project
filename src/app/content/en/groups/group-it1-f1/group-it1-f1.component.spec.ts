import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1F1Component } from './group-it1-f1.component';

describe('GroupIT1F1Component', () => {
  let component: GroupIT1F1Component;
  let fixture: ComponentFixture<GroupIT1F1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1F1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1F1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

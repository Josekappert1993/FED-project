import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1F2Component } from './group-it1-f2.component';

describe('GroupIT1F2Component', () => {
  let component: GroupIT1F2Component;
  let fixture: ComponentFixture<GroupIT1F2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1F2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1F2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

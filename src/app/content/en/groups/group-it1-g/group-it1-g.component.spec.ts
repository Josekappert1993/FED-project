import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1GComponent } from './group-it1-g.component';

describe('GroupIT1GComponent', () => {
  let component: GroupIT1GComponent;
  let fixture: ComponentFixture<GroupIT1GComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1GComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1GComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

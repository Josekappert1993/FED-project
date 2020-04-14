import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1CComponent } from './group-it1-c.component';

describe('GroupIT1CComponent', () => {
  let component: GroupIT1CComponent;
  let fixture: ComponentFixture<GroupIT1CComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1CComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

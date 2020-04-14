import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1IComponent } from './group-it1-i.component';

describe('GroupIT1IComponent', () => {
  let component: GroupIT1IComponent;
  let fixture: ComponentFixture<GroupIT1IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

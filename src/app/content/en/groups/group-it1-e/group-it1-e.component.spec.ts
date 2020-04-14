import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1EComponent } from './group-it1-e.component';

describe('GroupIT1EComponent', () => {
  let component: GroupIT1EComponent;
  let fixture: ComponentFixture<GroupIT1EComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1EComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

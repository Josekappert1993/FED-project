import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1BComponent } from './group-it1-b.component';

describe('GroupIT1BComponent', () => {
  let component: GroupIT1BComponent;
  let fixture: ComponentFixture<GroupIT1BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

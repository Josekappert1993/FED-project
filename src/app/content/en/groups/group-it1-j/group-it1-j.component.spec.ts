import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1JComponent } from './group-it1-j.component';

describe('GroupIT1JComponent', () => {
  let component: GroupIT1JComponent;
  let fixture: ComponentFixture<GroupIT1JComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1JComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1JComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

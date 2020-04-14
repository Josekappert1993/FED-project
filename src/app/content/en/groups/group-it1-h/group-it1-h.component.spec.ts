import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1HComponent } from './group-it1-h.component';

describe('GroupIT1HComponent', () => {
  let component: GroupIT1HComponent;
  let fixture: ComponentFixture<GroupIT1HComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1HComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

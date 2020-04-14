import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1AComponent } from './group-it1-a.component';

describe('GroupIT1AComponent', () => {
  let component: GroupIT1AComponent;
  let fixture: ComponentFixture<GroupIT1AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

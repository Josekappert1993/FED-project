import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIT1DComponent } from './group-it1-d.component';

describe('GroupIT1DComponent', () => {
  let component: GroupIT1DComponent;
  let fixture: ComponentFixture<GroupIT1DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupIT1DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIT1DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

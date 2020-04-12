import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNlComponent } from './nav-nl.component';

describe('NavNlComponent', () => {
  let component: NavNlComponent;
  let fixture: ComponentFixture<NavNlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavNlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

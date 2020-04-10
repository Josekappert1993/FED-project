import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEnComponent } from './nav-en.component';

describe('NavEnComponent', () => {
  let component: NavEnComponent;
  let fixture: ComponentFixture<NavEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

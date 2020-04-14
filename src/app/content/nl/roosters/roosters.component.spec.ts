import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoostersComponent } from './roosters.component';

describe('RoostersComponent', () => {
  let component: RoostersComponent;
  let fixture: ComponentFixture<RoostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

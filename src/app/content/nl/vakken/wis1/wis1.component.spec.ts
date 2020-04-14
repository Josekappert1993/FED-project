import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WIS1Component } from './wis1.component';

describe('WIS1Component', () => {
  let component: WIS1Component;
  let fixture: ComponentFixture<WIS1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WIS1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WIS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

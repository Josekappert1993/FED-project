import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PHP1Component } from './php1.component';

describe('PHP1Component', () => {
  let component: PHP1Component;
  let fixture: ComponentFixture<PHP1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PHP1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PHP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

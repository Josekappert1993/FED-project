import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FED1Component } from './fed1.component';

describe('FED1Component', () => {
  let component: FED1Component;
  let fixture: ComponentFixture<FED1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FED1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FED1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

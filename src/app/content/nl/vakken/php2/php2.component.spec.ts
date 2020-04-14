import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PHP2Component } from './php2.component';

describe('PHP2Component', () => {
  let component: PHP2Component;
  let fixture: ComponentFixture<PHP2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PHP2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PHP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

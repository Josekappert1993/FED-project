import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Netwerken1Component } from './netwerken1.component';

describe('Netwerken1Component', () => {
  let component: Netwerken1Component;
  let fixture: ComponentFixture<Netwerken1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Netwerken1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Netwerken1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

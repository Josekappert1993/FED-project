import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSharp1Component } from './csharp1.component';

describe('CSharp1Component', () => {
  let component: CSharp1Component;
  let fixture: ComponentFixture<CSharp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSharp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSharp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

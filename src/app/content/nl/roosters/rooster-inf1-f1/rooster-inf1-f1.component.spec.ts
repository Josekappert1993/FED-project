import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterINF1F1Component } from './rooster-inf1-f1.component';

describe('RoosterINF1F1Component', () => {
  let component: RoosterINF1F1Component;
  let fixture: ComponentFixture<RoosterINF1F1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterINF1F1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterINF1F1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UitstroomProfielenComponent } from './uitstroom-profielen.component';

describe('UitstroomProfielenComponent', () => {
  let component: UitstroomProfielenComponent;
  let fixture: ComponentFixture<UitstroomProfielenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UitstroomProfielenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UitstroomProfielenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

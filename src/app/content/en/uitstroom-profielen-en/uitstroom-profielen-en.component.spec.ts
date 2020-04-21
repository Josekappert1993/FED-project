import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UitstroomProfielenEnComponent } from './uitstroom-profielen-en.component';

describe('UitstroomProfielenEnComponent', () => {
  let component: UitstroomProfielenEnComponent;
  let fixture: ComponentFixture<UitstroomProfielenEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UitstroomProfielenEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UitstroomProfielenEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

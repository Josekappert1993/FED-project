import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchriftelijkeCommunicatieComponent } from './schriftelijke-communicatie.component';

describe('SchriftelijkeCommunicatieComponent', () => {
  let component: SchriftelijkeCommunicatieComponent;
  let fixture: ComponentFixture<SchriftelijkeCommunicatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchriftelijkeCommunicatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchriftelijkeCommunicatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

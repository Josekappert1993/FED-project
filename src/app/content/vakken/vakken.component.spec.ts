import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VakkenComponent } from './vakken.component';

describe('VakkenComponent', () => {
  let component: VakkenComponent;
  let fixture: ComponentFixture<VakkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VakkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VakkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

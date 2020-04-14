import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SLB1AComponent } from './slb1-a.component';

describe('SLB1AComponent', () => {
  let component: SLB1AComponent;
  let fixture: ComponentFixture<SLB1AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SLB1AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SLB1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

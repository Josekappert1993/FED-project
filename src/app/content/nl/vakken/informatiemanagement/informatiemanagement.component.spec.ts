import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatiemanagementComponent } from './informatiemanagement.component';

describe('InformatiemanagementComponent', () => {
  let component: InformatiemanagementComponent;
  let fixture: ComponentFixture<InformatiemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformatiemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformatiemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

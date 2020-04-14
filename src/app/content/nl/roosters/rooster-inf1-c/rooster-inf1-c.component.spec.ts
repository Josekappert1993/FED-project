import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterINF1CComponent } from './rooster-inf1-c.component';

describe('RoosterINF1CComponent', () => {
  let component: RoosterINF1CComponent;
  let fixture: ComponentFixture<RoosterINF1CComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterINF1CComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterINF1CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

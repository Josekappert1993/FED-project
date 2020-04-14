import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterINF1GComponent } from './rooster-inf1-g.component';

describe('RoosterINF1GComponent', () => {
  let component: RoosterINF1GComponent;
  let fixture: ComponentFixture<RoosterINF1GComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterINF1GComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterINF1GComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

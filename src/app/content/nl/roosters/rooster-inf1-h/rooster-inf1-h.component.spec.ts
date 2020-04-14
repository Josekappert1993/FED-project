import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterINF1HComponent } from './rooster-inf1-h.component';

describe('RoosterINF1HComponent', () => {
  let component: RoosterINF1HComponent;
  let fixture: ComponentFixture<RoosterINF1HComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterINF1HComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterINF1HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

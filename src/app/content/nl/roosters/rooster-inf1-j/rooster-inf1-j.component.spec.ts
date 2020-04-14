import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterINF1JComponent } from './rooster-inf1-j.component';

describe('RoosterINF1JComponent', () => {
  let component: RoosterINF1JComponent;
  let fixture: ComponentFixture<RoosterINF1JComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterINF1JComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterINF1JComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

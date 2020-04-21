import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterINF1AComponent } from './rooster-inf1-a.component';

describe('RoosterINF1AComponent', () => {
  let component: RoosterINF1AComponent;
  let fixture: ComponentFixture<RoosterINF1AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterINF1AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterINF1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

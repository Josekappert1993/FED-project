import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterINF1DComponent } from './rooster-inf1-d.component';

describe('RoosterINF1DComponent', () => {
  let component: RoosterINF1DComponent;
  let fixture: ComponentFixture<RoosterINF1DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterINF1DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterINF1DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

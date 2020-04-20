import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterINF1EComponent } from './rooster-inf1-e.component';

describe('RoosterINF1EComponent', () => {
  let component: RoosterINF1EComponent;
  let fixture: ComponentFixture<RoosterINF1EComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterINF1EComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterINF1EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

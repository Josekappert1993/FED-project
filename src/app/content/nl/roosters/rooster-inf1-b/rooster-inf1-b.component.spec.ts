import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterINF1BComponent } from './rooster-inf1-b.component';

describe('RoosterINF1BComponent', () => {
  let component: RoosterINF1BComponent;
  let fixture: ComponentFixture<RoosterINF1BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterINF1BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterINF1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

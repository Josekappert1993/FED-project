import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoosterINF1IComponent } from './rooster-inf1-i.component';

describe('RoosterINF1IComponent', () => {
  let component: RoosterINF1IComponent;
  let fixture: ComponentFixture<RoosterINF1IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoosterINF1IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoosterINF1IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

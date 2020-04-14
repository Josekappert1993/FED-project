import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasINF1HComponent } from './klas-inf1-h.component';

describe('KlasINF1HComponent', () => {
  let component: KlasINF1HComponent;
  let fixture: ComponentFixture<KlasINF1HComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasINF1HComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasINF1HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasINF1GComponent } from './klas-inf1-g.component';

describe('KlasINF1GComponent', () => {
  let component: KlasINF1GComponent;
  let fixture: ComponentFixture<KlasINF1GComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasINF1GComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasINF1GComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

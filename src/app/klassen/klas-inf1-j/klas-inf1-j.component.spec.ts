import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasINF1JComponent } from './klas-inf1-j.component';

describe('KlasINF1JComponent', () => {
  let component: KlasINF1JComponent;
  let fixture: ComponentFixture<KlasINF1JComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasINF1JComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasINF1JComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

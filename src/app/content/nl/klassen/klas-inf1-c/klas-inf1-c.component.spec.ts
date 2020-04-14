import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasINF1CComponent } from './klas-inf1-c.component';

describe('KlasINF1CComponent', () => {
  let component: KlasINF1CComponent;
  let fixture: ComponentFixture<KlasINF1CComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasINF1CComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasINF1CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

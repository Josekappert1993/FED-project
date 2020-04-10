import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasINF1DComponent } from './klas-inf1-d.component';

describe('KlasINF1DComponent', () => {
  let component: KlasINF1DComponent;
  let fixture: ComponentFixture<KlasINF1DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasINF1DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasINF1DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

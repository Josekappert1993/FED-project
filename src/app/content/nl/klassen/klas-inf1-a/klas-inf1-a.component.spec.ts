import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasINF1AComponent } from './klas-inf1-a.component';

describe('KlasINF1AComponent', () => {
  let component: KlasINF1AComponent;
  let fixture: ComponentFixture<KlasINF1AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasINF1AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasINF1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

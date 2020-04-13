import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasINF1EComponent } from './klas-inf1-e.component';

describe('KlasINF1EComponent', () => {
  let component: KlasINF1EComponent;
  let fixture: ComponentFixture<KlasINF1EComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasINF1EComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasINF1EComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

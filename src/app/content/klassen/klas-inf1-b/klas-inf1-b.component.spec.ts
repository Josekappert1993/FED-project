import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasINF1BComponent } from './klas-inf1-b.component';

describe('KlasINF1BComponent', () => {
  let component: KlasINF1BComponent;
  let fixture: ComponentFixture<KlasINF1BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasINF1BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasINF1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

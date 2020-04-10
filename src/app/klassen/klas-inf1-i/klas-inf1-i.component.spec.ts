import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasINF1IComponent } from './klas-inf1-i.component';

describe('KlasINF1IComponent', () => {
  let component: KlasINF1IComponent;
  let fixture: ComponentFixture<KlasINF1IComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasINF1IComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasINF1IComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

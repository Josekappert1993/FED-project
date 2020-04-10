import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasINF1FComponent } from './klas-inf1-f.component';

describe('KlasINF1FComponent', () => {
  let component: KlasINF1FComponent;
  let fixture: ComponentFixture<KlasINF1FComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlasINF1FComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlasINF1FComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoekenlijstEnComponent } from './boekenlijst-en.component';

describe('BoekenlijstEnComponent', () => {
  let component: BoekenlijstEnComponent;
  let fixture: ComponentFixture<BoekenlijstEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoekenlijstEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoekenlijstEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

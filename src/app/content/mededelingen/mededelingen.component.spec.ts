import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MededelingenComponent } from './mededelingen.component';

describe('MededelingenComponent', () => {
  let component: MededelingenComponent;
  let fixture: ComponentFixture<MededelingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MededelingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MededelingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

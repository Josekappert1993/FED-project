import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaproductieComponent } from './multimediaproductie.component';

describe('MultimediaproductieComponent', () => {
  let component: MultimediaproductieComponent;
  let fixture: ComponentFixture<MultimediaproductieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaproductieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaproductieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

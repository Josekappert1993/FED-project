import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnderwijsvormComponent } from './onderwijsvorm.component';

describe('OnderwijsvormComponent', () => {
  let component: OnderwijsvormComponent;
  let fixture: ComponentFixture<OnderwijsvormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnderwijsvormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnderwijsvormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

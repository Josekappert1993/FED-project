import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondelingeCommunicatieComponent } from './mondelinge-communicatie.component';

describe('MondelingeCommunicatieComponent', () => {
  let component: MondelingeCommunicatieComponent;
  let fixture: ComponentFixture<MondelingeCommunicatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondelingeCommunicatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondelingeCommunicatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInnovateComponent } from './project-innovate.component';

describe('ProjectInnovateComponent', () => {
  let component: ProjectInnovateComponent;
  let fixture: ComponentFixture<ProjectInnovateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInnovateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInnovateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

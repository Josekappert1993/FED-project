import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfessioneleWebsiteComponent } from './project-professionele-website.component';

describe('ProjectProfessioneleWebsiteComponent', () => {
  let component: ProjectProfessioneleWebsiteComponent;
  let fixture: ComponentFixture<ProjectProfessioneleWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProfessioneleWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfessioneleWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

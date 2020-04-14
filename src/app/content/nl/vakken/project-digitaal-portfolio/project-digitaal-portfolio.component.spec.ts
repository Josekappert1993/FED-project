import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDigitaalPortfolioComponent } from './project-digitaal-portfolio.component';

describe('ProjectDigitaalPortfolioComponent', () => {
  let component: ProjectDigitaalPortfolioComponent;
  let fixture: ComponentFixture<ProjectDigitaalPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDigitaalPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDigitaalPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

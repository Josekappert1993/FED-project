import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBattleBotComponent } from './project-battle-bot.component';

describe('ProjectBattleBotComponent', () => {
  let component: ProjectBattleBotComponent;
  let fixture: ComponentFixture<ProjectBattleBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectBattleBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBattleBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { MatMenuModule, MatExpansionModule } from '@angular/material';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './content/nl/curriculum/curriculum.component';
import { NavEnComponent } from './header/nav-en/nav-en.component';
import { NavNlComponent } from './header/nav-nl/nav-nl.component';
import { HomeNlComponent } from './content/nl/home-nl/home-nl.component';
import { HomeEnComponent } from './content/en/home-en/home-en.component';
import { KlassenComponent } from './content/nl/klassen/klassen.component';
import { KlasINF1AComponent } from './content/nl/klassen/klas-inf1-a/klas-inf1-a.component';
import { KlasINF1BComponent } from './content/nl/klassen/klas-inf1-b/klas-inf1-b.component';
import { KlasINF1CComponent } from './content/nl/klassen/klas-inf1-c/klas-inf1-c.component';
import { KlasINF1DComponent } from './content/nl/klassen/klas-inf1-d/klas-inf1-d.component';
import { KlasINF1EComponent } from './content/nl/klassen/klas-inf1-e/klas-inf1-e.component';
import { KlasINF1FComponent } from './content/nl/klassen/klas-inf1-f/klas-inf1-f.component';
import { KlasINF1GComponent } from './content/nl/klassen/klas-inf1-g/klas-inf1-g.component';
import { KlasINF1HComponent } from './content/nl/klassen/klas-inf1-h/klas-inf1-h.component';
import { KlasINF1IComponent } from './content/nl/klassen/klas-inf1-i/klas-inf1-i.component';
import { KlasINF1JComponent } from './content/nl/klassen/klas-inf1-j/klas-inf1-j.component';
import { RoostersComponent } from './content/nl/roosters/roosters.component';
import { RoosterINF1AComponent } from './content/nl/roosters/rooster-inf1-a/rooster-inf1-a.component';
import { RoosterINF1BComponent } from './content/nl/roosters/rooster-inf1-b/rooster-inf1-b.component';
import { RoosterINF1CComponent } from './content/nl/roosters/rooster-inf1-c/rooster-inf1-c.component';
import { RoosterINF1DComponent } from './content/nl/roosters/rooster-inf1-d/rooster-inf1-d.component';
import { RoosterINF1EComponent } from './content/nl/roosters/rooster-inf1-e/rooster-inf1-e.component';
import { RoosterINF1F1Component } from './content/nl/roosters/rooster-inf1-f1/rooster-inf1-f1.component';
import { RoosterINF1GComponent } from './content/nl/roosters/rooster-inf1-g/rooster-inf1-g.component';
import { RoosterINF1HComponent } from './content/nl/roosters/rooster-inf1-h/rooster-inf1-h.component';
import { RoosterINF1IComponent } from './content/nl/roosters/rooster-inf1-i/rooster-inf1-i.component';
import { RoosterINF1JComponent } from './content/nl/roosters/rooster-inf1-j/rooster-inf1-j.component';
import { VakkenComponent } from './content/nl/vakken/vakken.component';
import { PHP1Component } from './content/nl/vakken/php1/php1.component';
import { CSharp1Component } from './content/nl/vakken/csharp1/csharp1.component';
import { Database1Component } from './content/nl/vakken/database1/database1.component';
import { FED1Component } from './content/nl/vakken/fed1/fed1.component';
import { HTMLComponent } from './content/nl/vakken/html/html.component';
import { InformatiemanagementComponent } from './content/nl/vakken/informatiemanagement/informatiemanagement.component';
import { Java1Component } from './content/nl/vakken/java1/java1.component';
import { MondelingeCommunicatieComponent } from './content/nl/vakken/mondelinge-communicatie/mondelinge-communicatie.component';
import { MultimediaproductieComponent } from './content/nl/vakken/multimediaproductie/multimediaproductie.component';
import { Netwerken1Component } from './content/nl/vakken/netwerken1/netwerken1.component';
import { PHP2Component } from './content/nl/vakken/php2/php2.component';
import { ProjectBattleBotComponent } from './content/nl/vakken/project-battle-bot/project-battle-bot.component';
import { ProjectDigitaalPortfolioComponent } from './content/nl/vakken/project-digitaal-portfolio/project-digitaal-portfolio.component';
import { ProjectInnovateComponent } from './content/nl/vakken/project-innovate/project-innovate.component';
import { ProjectProfessioneleWebsiteComponent } from './content/nl/vakken/project-professionele-website/project-professionele-website.component';
import { SchriftelijkeCommunicatieComponent } from './content/nl/vakken/schriftelijke-communicatie/schriftelijke-communicatie.component';
import { SLB1AComponent } from './content/nl/vakken/slb1-a/slb1-a.component';
import { WIS1Component } from './content/nl/vakken/wis1/wis1.component';
import { DocentenComponent } from './content/nl/docenten/docenten.component';
import { MededelingenComponent } from './content/nl/mededelingen/mededelingen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Engelse versie
import { GroupsComponent } from './content/en/groups/groups.component';
import { GroupIT1AComponent } from './content/en/groups/group-it1-a/group-it1-a.component';
import { GroupIT1BComponent } from './content/en/groups/group-it1-b/group-it1-b.component';
import { GroupIT1CComponent } from './content/en/groups/group-it1-c/group-it1-c.component';
import { GroupIT1DComponent } from './content/en/groups/group-it1-d/group-it1-d.component';
import { GroupIT1EComponent } from './content/en/groups/group-it1-e/group-it1-e.component';
import { GroupIT1F1Component } from './content/en/groups/group-it1-f1/group-it1-f1.component';
import { GroupIT1F2Component } from './content/en/groups/group-it1-f2/group-it1-f2.component';
import { GroupIT1GComponent } from './content/en/groups/group-it1-g/group-it1-g.component';
import { GroupIT1HComponent } from './content/en/groups/group-it1-h/group-it1-h.component';
import { GroupIT1IComponent } from './content/en/groups/group-it1-i/group-it1-i.component';
import { GroupIT1JComponent } from './content/en/groups/group-it1-j/group-it1-j.component';
import { CurriculumEnComponent } from './content/en/curriculum-en/curriculum-en.component';

import { ClassesComponent } from './content/en/classes/classes.component';
import { SchedulesComponent } from './content/en/schedules/schedules.component';
import { ScheduleIT1AComponent } from './content/en/schedules/schedule-it1-a/schedule-it1-a.component';
import { ScheduleIT1BComponent } from './content/en/schedules/schedule-it1-b/schedule-it1-b.component';
import { ScheduleIT1CComponent } from './content/en/schedules/schedule-it1-c/schedule-it1-c.component';
import { ScheduleIT1DComponent } from './content/en/schedules/schedule-it1-d/schedule-it1-d.component';
import { ScheduleIT1EComponent } from './content/en/schedules/schedule-it1-e/schedule-it1-e.component';
import { ScheduleIT1F1Component } from './content/en/schedules/schedule-it1-f1/schedule-it1-f1.component';
import { ScheduleIT1FF2Component } from './content/en/schedules/schedule-it1-ff2/schedule-it1-ff2.component';
import { ScheduleIT1GComponent } from './content/en/schedules/schedule-it1-g/schedule-it1-g.component';
import { ScheduleIT1HComponent } from './content/en/schedules/schedule-it1-h/schedule-it1-h.component';
import { ScheduleIT1IComponent } from './content/en/schedules/schedule-it1-i/schedule-it1-i.component';
import { ScheduleIT1JComponent } from './content/en/schedules/schedule-it1-j/schedule-it1-j.component';

const appRoutes: Routes = [
  {
    path: '', component:HomeNlComponent
  },
  {
    path: 'home-nl', component:HomeNlComponent
  },
  {
    path: 'klassen', component:KlassenComponent
  },
  {
    path: 'klas-INF1A', component:KlasINF1AComponent
  },
  {
    path: 'klas-INF1B', component:KlasINF1BComponent
  },
  {
    path: 'klas-INF1C', component:KlasINF1CComponent
  },
  {
    path: 'klas-INF1D', component:KlasINF1DComponent
  },
  {
    path: 'klas-INF1E', component:KlasINF1EComponent
  },
  {
    path: 'klas-INF1F', component:KlasINF1FComponent
  },
  {
    path: 'klas-INF1G', component:KlasINF1GComponent
  },
  {
    path: 'klas-INF1H', component:KlasINF1HComponent
  },
  {
    path: 'klas-INF1I', component:KlasINF1IComponent
  },
  {
    path: 'klas-INF1J', component:KlasINF1JComponent
  },
  {
    path: 'roosters', component:RoostersComponent
  },
  {
    path: 'rooster-INF1A', component:RoosterINF1AComponent
  },
  {
    path: 'rooster-INF1B', component:RoosterINF1BComponent
  },
  {
    path: 'rooster-INF1C', component:RoosterINF1CComponent
  },
  {
    path: 'rooster-INF1D', component:RoosterINF1DComponent
  },
  {
    path: 'rooster-INF1E', component:RoosterINF1EComponent
  },
  {
    path: 'rooster-INF1F1', component:KlasINF1FComponent
  },
  {
    path: 'rooster-INF1G', component:RoosterINF1GComponent
  },
  {
    path: 'rooster-INF1H', component:RoosterINF1HComponent
  },
  {
    path: 'rooster-INF1I', component:RoosterINF1IComponent
  },
  {
    path: 'rooster-INF1J', component:RoosterINF1JComponent
  },
  {
    path: 'vakken', component:VakkenComponent
  },
  {
    path: 'csharp1',component:CSharp1Component
  },
  {
    path: 'database1', component:Database1Component
  },
  {
    path: 'FED1', component:FED1Component
  },
  {
    path: 'html', component: HTMLComponent
  },
  {
    path: 'Informatiemanagement', component:InformatiemanagementComponent
  },
  {
    path: 'java1', component:Java1Component
  },
  {
    path: 'mondelinge-communicatie', component:MondelingeCommunicatieComponent
  },
  {
    path: 'multimediaproductie', component:MultimediaproductieComponent
  },
  {
    path: 'netwerken1', component:Netwerken1Component
  },
  {
    path: 'php1', component: PHP1Component
  },
  {
    path: 'php2', component:PHP2Component
  },
  {
    path:'ProjectBattleBot', component:ProjectBattleBotComponent
  },
  {
    path: 'ProjectDigitaalPortfolio', component:ProjectDigitaalPortfolioComponent
  },
  {
    path: 'ProjectInnovate',component:ProjectInnovateComponent
  },
  {
    path: 'ProjectProfessioneleWebsite', component:ProjectProfessioneleWebsiteComponent
  },
  {
    path:'SchriftelijkeCommunicatie', component: SchriftelijkeCommunicatieComponent
  },
  {
    path:'SLB1A', component: SLB1AComponent
  },
  {
    path: 'wis1', component: WIS1Component
  },
  {    
    path: 'docenten', component:DocentenComponent
  },
  {    
    path: 'mededelingen', component:MededelingenComponent
  },
  {    
    path: 'Curriculum-nl', component:CurriculumComponent
  },
  // engelse navigatie
  {
    path: 'home-en', component:HomeEnComponent
  },
  {
    path: 'group-en', component:GroupsComponent
  },
  {
    path: 'group-IT1A', component:GroupIT1AComponent
  },
  {
    path: 'group-IT1B', component:GroupIT1BComponent
  },
  {
    path: 'group-IT1C', component:GroupIT1CComponent
  },
  {
    path: 'group-IT1D', component:GroupIT1DComponent
  },
  {
    path: 'group-IT1E', component:GroupIT1EComponent
  },
  {
    path: 'group-IT1F', component:GroupIT1F1Component
  },
  {
    path: 'schedules-en', component:SchedulesComponent
  },
  {
    path: 'schedule-IT1A', component:ScheduleIT1AComponent
  },
  {
    path: 'schedule-IT1B', component:ScheduleIT1BComponent
  },
  {
    path: 'schedule-IT1C', component:ScheduleIT1CComponent
  },
  {
    path: 'schedule-IT1D', component:ScheduleIT1DComponent
  },
  {
    path: 'schedule-IT1E', component:ScheduleIT1EComponent
  },
  {
    path: 'schedule-IT1F', component:ScheduleIT1F1Component
  },
  {    
    path: 'Curriculum-en', component:CurriculumEnComponent
  }

];
@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    NavEnComponent,
    NavNlComponent,
    HomeNlComponent,
    HomeEnComponent,
    KlassenComponent,
    KlasINF1AComponent,
    KlasINF1BComponent,
    KlasINF1CComponent,
    KlasINF1DComponent,
    KlasINF1EComponent,
    KlasINF1FComponent,
    KlasINF1GComponent,
    KlasINF1HComponent,
    KlasINF1IComponent,
    KlasINF1JComponent,
    RoostersComponent,
    RoosterINF1AComponent,
    RoosterINF1BComponent,
    RoosterINF1CComponent,
    RoosterINF1DComponent,
    RoosterINF1EComponent,
    RoosterINF1F1Component,
    RoosterINF1GComponent,
    RoosterINF1HComponent,
    RoosterINF1IComponent,
    RoosterINF1JComponent,
    VakkenComponent,
    CSharp1Component,
    Database1Component,
    FED1Component,
    HTMLComponent,
    InformatiemanagementComponent,
    Java1Component,
    MondelingeCommunicatieComponent,
    MultimediaproductieComponent,
    Netwerken1Component,
    PHP1Component,
    PHP2Component,
    ProjectBattleBotComponent,
    ProjectDigitaalPortfolioComponent,
    ProjectInnovateComponent,
    ProjectProfessioneleWebsiteComponent,
    SchriftelijkeCommunicatieComponent,
    SLB1AComponent,
    WIS1Component,
    DocentenComponent,
    MededelingenComponent,
    GroupsComponent,
    GroupIT1AComponent,
    GroupIT1BComponent,
    GroupIT1CComponent,
    GroupIT1DComponent,
    GroupIT1EComponent,
    GroupIT1F1Component,
    GroupIT1F2Component,
    GroupIT1GComponent,
    GroupIT1HComponent,
    GroupIT1IComponent,
    GroupIT1JComponent,
    CurriculumEnComponent,
    ClassesComponent,
    SchedulesComponent,
    ScheduleIT1AComponent,
    ScheduleIT1BComponent,
    ScheduleIT1CComponent,
    ScheduleIT1DComponent,
    ScheduleIT1EComponent,
    ScheduleIT1F1Component,
    ScheduleIT1FF2Component,
    ScheduleIT1GComponent,
    ScheduleIT1HComponent,
    ScheduleIT1IComponent,
    ScheduleIT1JComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    MatExpansionModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }

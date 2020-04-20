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
import { DocentenComponent } from './content/nl/docenten/docenten.component';
import { MededelingenComponent } from './content/nl/mededelingen/mededelingen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { Netwerken1Component } from './content/nl/vakken/netwerken1/netwerken1.component';
import { PHP2Component } from './content/nl/vakken/php2/php2.component';
import { ProjectBattleBotComponent } from './content/nl/vakken/project-battle-bot/project-battle-bot.component';
import { ProjectDigitaalPortfolioComponent } from './content/nl/vakken/project-digitaal-portfolio/project-digitaal-portfolio.component';
import { ProjectInnovateComponent } from './content/nl/vakken/project-innovate/project-innovate.component';
import { ProjectProfessioneleWebsiteComponent } from './content/nl/vakken/project-professionele-website/project-professionele-website.component';
import { SchriftelijkeCommunicatieComponent } from './content/nl/vakken/schriftelijke-communicatie/schriftelijke-communicatie.component';
import { SLB1AComponent } from './content/nl/vakken/slb1-a/slb1-a.component';
import { WIS1Component } from './content/nl/vakken/wis1/wis1.component';
import { CompetentiesComponent } from './content/nl/competenties/competenties.component';
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
    path: 'vakken', component:VakkenComponent
  },
  {
    path: 'CSharp1', component: CSharp1Component
  },
  {
    path: 'Database1', component: Database1Component
  },
  {
    path: 'FED1', component: FED1Component
  },
  {
    path: 'HTML', component: HTMLComponent
  },
  {
    path: 'Informatiemanagement', component: InformatiemanagementComponent
  },
  {
    path: 'Java1', component: Java1Component
  },
  {
    path: 'Mondelinge-Communicatie', component: MondelingeCommunicatieComponent
  },
  {
    path: 'Multimediaproductie', component: MultimediaproductieComponent
  },
  {
    path: 'Netwerken1', component: Netwerken1Component
  },
  {
    path: 'PHP1', component:PHP1Component
  },
  {
    path: 'PHP2', component:PHP2Component
  },
  {
    path: 'Project-Battle-bot', component:ProjectBattleBotComponent
  },
  {
    path: 'Project-digitaal-portfolio', component:ProjectDigitaalPortfolioComponent
  },
  {
    path: 'Project-Innovate', component:ProjectInnovateComponent
  },
  {
    path: 'Project-professionele-website', component: ProjectProfessioneleWebsiteComponent
  },
  {
    path: 'Schriftelijke-Communicatie', component: SchriftelijkeCommunicatieComponent
  },
  {
    path: 'SLB1A', component: SLB1AComponent
  },
  {
    path: 'WIS1', component: WIS1Component
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
  {
    path: 'Competenties', component:CompetentiesComponent
  },
  // engelse navigatie
  {
    path: 'home-en', component:HomeEnComponent
  },
  {
    path: 'group-en', component:GroupsComponent
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
    VakkenComponent,
    CSharp1Component,
    Database1Component,
    FED1Component,
    HTMLComponent,
    InformatiemanagementComponent,
    Java1Component,
    MondelingeCommunicatieComponent,
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
    CompetentiesComponent
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

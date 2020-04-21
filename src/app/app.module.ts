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
import { RoostersComponent } from './content/nl/roosters/roosters.component';
import { VakkenComponent } from './content/nl/vakken/vakken.component';
import { DocentenComponent } from './content/nl/docenten/docenten.component';
import { MededelingenComponent } from './content/nl/mededelingen/mededelingen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GroupsComponent } from './content/en/groups/groups.component';
import { GroupIT1AComponent } from './content/en/groups/group-it1-a/group-it1-a.component';
import { GroupIT1BComponent } from './content/en/groups/group-it1-b/group-it1-b.component';
import { GroupIT1CComponent } from './content/en/groups/group-it1-c/group-it1-c.component';
import { GroupIT1DComponent } from './content/en/groups/group-it1-d/group-it1-d.component';
import { GroupIT1EComponent } from './content/en/groups/group-it1-e/group-it1-e.component';
import { CurriculumEnComponent } from './content/en/curriculum-en/curriculum-en.component';
import { ClassesComponent } from './content/en/classes/classes.component';
import { CompetentiesComponent } from './content/nl/competenties/competenties.component';
import { SchedulesComponent } from './content/en/schedules/schedules.component';
import { AnnouncementsComponent } from './content/en/announcements/announcements.component';
import { TeachersComponent } from './content/en/teachers/teachers.component';
import { BoekenlijstComponent } from './content/nl/boekenlijst/boekenlijst.component';
import { OnderwijsvormComponent } from './content/nl/onderwijsvorm/onderwijsvorm.component';
import { UitstroomProfielenComponent } from './content/nl/uitstroom-profielen/uitstroom-profielen.component';
import { UitstroomProfielenEnComponent } from './content/en/uitstroom-profielen-en/uitstroom-profielen-en.component';
import { BoekenlijstEnComponent } from './content/en/boekenlijst-en/boekenlijst-en.component';
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
    path: 'roosters', component:RoostersComponent
  },
  {
    path: 'vakken', component:VakkenComponent
  },
  {    
    path: 'docenten', component:DocentenComponent
  },
  {    
    path: 'mededelingen', component:MededelingenComponent
  },
  {    
    path: 'studieopbouw-nl', component:CurriculumComponent
  },
  {
    path: 'uitstroom-profielen', component: UitstroomProfielenComponent
  },
  {
    path: 'onderwijsvorm', component:OnderwijsvormComponent
  },
  {    
    path: 'boekenlijst', component:BoekenlijstComponent
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
    path: 'schedules', component: SchedulesComponent
  },
  {
    path: 'teachers', component: TeachersComponent
  },
  {
    path: 'announcements', component: AnnouncementsComponent
  },
  {    
    path: 'onderwijsvorm-en', component:CurriculumEnComponent
  },
  {
    path: 'studieopbouw-en', component:CurriculumEnComponent
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
    RoostersComponent,
    VakkenComponent,
    DocentenComponent,
    MededelingenComponent,
    GroupsComponent,
    GroupIT1AComponent,
    GroupIT1BComponent,
    GroupIT1CComponent,
    GroupIT1DComponent,
    GroupIT1EComponent,
    CurriculumEnComponent,
    CompetentiesComponent,
    SchedulesComponent,
    AnnouncementsComponent,
    TeachersComponent,
    BoekenlijstComponent,
    OnderwijsvormComponent,
    UitstroomProfielenComponent,
    UitstroomProfielenEnComponent,
    BoekenlijstEnComponent
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

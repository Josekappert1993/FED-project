import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { MatMenuModule, MatExpansionModule, MatIcon} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './content/curriculum/curriculum.component';
import { NavEnComponent } from './header/nav-en/nav-en.component';
import { NavNlComponent } from './header/nav-nl/nav-nl.component';
import { HomeNlComponent } from './content/home-nl/home-nl.component';
import { HomeEnComponent } from './content/home-en/home-en.component';
import { KlassenComponent } from './content/klassen/klassen.component';
import { KlasINF1AComponent } from './content/klassen/klas-inf1-a/klas-inf1-a.component';
import { KlasINF1BComponent } from './content/klassen/klas-inf1-b/klas-inf1-b.component';
import { KlasINF1CComponent } from './content/klassen/klas-inf1-c/klas-inf1-c.component';
import { KlasINF1DComponent } from './content/klassen/klas-inf1-d/klas-inf1-d.component';
import { KlasINF1EComponent } from './content/klassen/klas-inf1-e/klas-inf1-e.component';
import { KlasINF1FComponent } from './content/klassen/klas-inf1-f/klas-inf1-f.component';
import { KlasINF1GComponent } from './content/klassen/klas-inf1-g/klas-inf1-g.component';
import { KlasINF1HComponent } from './content/klassen/klas-inf1-h/klas-inf1-h.component';
import { KlasINF1IComponent } from './content/klassen/klas-inf1-i/klas-inf1-i.component';
import { KlasINF1JComponent } from './content/klassen/klas-inf1-j/klas-inf1-j.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupsComponent } from './content/groups/groups.component';
import { GroupIT1AComponent } from './content/groups/group-it1-a/group-it1-a.component';
import { GroupIT1BComponent } from './content/groups/group-it1-b/group-it1-b.component';
import { GroupIT1CComponent } from './content/groups/group-it1-c/group-it1-c.component';
import { GroupIT1DComponent } from './content/groups/group-it1-d/group-it1-d.component';
import { GroupIT1EComponent } from './content/groups/group-it1-e/group-it1-e.component';
import { GroupIT1F1Component } from './content/groups/group-it1-f1/group-it1-f1.component';
import { GroupIT1F2Component } from './content/groups/group-it1-f2/group-it1-f2.component';
import { GroupIT1GComponent } from './content/groups/group-it1-g/group-it1-g.component';
import { GroupIT1HComponent } from './content/groups/group-it1-h/group-it1-h.component';
import { GroupIT1IComponent } from './content/groups/group-it1-i/group-it1-i.component';
import { GroupIT1JComponent } from './content/groups/group-it1-j/group-it1-j.component';
import { CurriculumEnComponent } from './content/curriculum-en/curriculum-en.component';
import { RoostersComponent } from './content/roosters/roosters.component';
import { RoosterINF1AComponent } from './content/roosters/rooster-inf1-a/rooster-inf1-a.component';
import { RoosterINF1BComponent } from './content/roosters/rooster-inf1-b/rooster-inf1-b.component';
import { RoosterINF1CComponent } from './content/roosters/rooster-inf1-c/rooster-inf1-c.component';
import { RoosterINF1DComponent } from './content/roosters/rooster-inf1-d/rooster-inf1-d.component';
import { RoosterINF1EComponent } from './content/roosters/rooster-inf1-e/rooster-inf1-e.component';
import { RoosterINF1F1Component } from './content/roosters/rooster-inf1-f1/rooster-inf1-f1.component';
import { RoosterINF1GComponent } from './content/roosters/rooster-inf1-g/rooster-inf1-g.component';
import { RoosterINF1HComponent } from './content/roosters/rooster-inf1-h/rooster-inf1-h.component';
import { RoosterINF1IComponent } from './content/roosters/rooster-inf1-i/rooster-inf1-i.component';
import { RoosterINF1JComponent } from './content/roosters/rooster-inf1-j/rooster-inf1-j.component';
import { VakkenComponent } from './content/vakken/vakken.component';
import { PHP1Component } from './content/vakken/php1/php1.component';
import { CSharp1Component } from './content/vakken/csharp1/csharp1.component';
import { Database1Component } from './content/vakken/database1/database1.component';
import { FED1Component } from './content/vakken/fed1/fed1.component';
import { HTMLComponent } from './content/vakken/html/html.component';
import { InformatiemanagementComponent } from './content/vakken/informatiemanagement/informatiemanagement.component';
import { Java1Component } from './content/vakken/java1/java1.component';
import { MondelingeCommunicatieComponent } from './content/vakken/mondelinge-communicatie/mondelinge-communicatie.component';
import { MultimediaproductieComponent } from './content/vakken/multimediaproductie/multimediaproductie.component';
const appRoutes: Routes = [
  {
    path: '', component:HomeNlComponent
  },
  {
    path: 'home-nl', component:HomeEnComponent
  },
  {    
    path: 'Curriculum-nl', component:CurriculumComponent
  },
  {
    path: 'home-en', component:HomeEnComponent
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
    CurriculumEnComponent
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

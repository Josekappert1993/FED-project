import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { NavEnComponent } from './nav-en/nav-en.component';
import { NavNlComponent } from './nav-nl/nav-nl.component';
import { HomeNlComponent } from './home-nl/home-nl.component';
import { HomeEnComponent } from './home-en/home-en.component';
import { KlassenComponent } from './klassen/klassen.component';
import { KlasINF1AComponent } from './klassen/klas-inf1-a/klas-inf1-a.component';
import { KlasINF1BComponent } from './klassen/klas-inf1-b/klas-inf1-b.component';
import { KlasINF1CComponent } from './klassen/klas-inf1-c/klas-inf1-c.component';
import { KlasINF1DComponent } from './klassen/klas-inf1-d/klas-inf1-d.component';
import { KlasINF1EComponent } from './klassen/klas-inf1-e/klas-inf1-e.component';
import { KlasINF1FComponent } from './klassen/klas-inf1-f/klas-inf1-f.component';
import { KlasINF1GComponent } from './klassen/klas-inf1-g/klas-inf1-g.component';
import { KlasINF1HComponent } from './klassen/klas-inf1-h/klas-inf1-h.component';
import { KlasINF1IComponent } from './klassen/klas-inf1-i/klas-inf1-i.component';
import { KlasINF1JComponent } from './klassen/klas-inf1-j/klas-inf1-j.component';
const appRoutes: Routes = [
  {
    path: '', component:HomeNlComponent
  },
  {
    path: 'home-en', component:HomeEnComponent
  },
  {    
    path: 'Curriculum-nl', component:CurriculumComponent
    
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
    KlasINF1JComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }

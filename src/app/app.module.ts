import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
const appRoutes: Routes = [
  {
    path: 'Curriculum', component:CurriculumComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent
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

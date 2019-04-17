import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // added Forms Module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    WorkexperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // added Forms Module
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

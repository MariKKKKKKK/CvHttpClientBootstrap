import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {CvService} from './cv.service';
import {AppComponent} from './app.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {EducationComponent} from './education/education.component';
import {SkillsComponent} from './skills/skills.component';


import {JsonIterationPipe} from './pipes/json-iteration.pipe';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    BasicInfoComponent,
    EducationComponent,
    SkillsComponent,
    JsonIterationPipe
  ],

  providers: [CvService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

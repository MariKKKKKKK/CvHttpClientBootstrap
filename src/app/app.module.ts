import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CustomMaterialModule} from './custom-material.module';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {CvService} from './cv.service';
import {AppComponent} from './app.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {EducationComponent} from './education/education.component';
import {SkillsComponent} from './skills/skills.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {JsonIterationPipe} from "./pipes/json-iteration.pipe";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule
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

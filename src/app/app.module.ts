import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import {CvService} from './cv.service';
import {AppComponent} from './app.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {EducationComponent} from './education/education.component';
import {SkillsComponent} from './skills/skills.component';
import { JsonIterationPipe } from './pipes/json-iteration.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    EducationComponent,
    SkillsComponent,
    JsonIterationPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [CvService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

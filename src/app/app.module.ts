import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CustomMaterialModule} from './custom-material.module';
import {RouterModule, Routes} from '@angular/router';

import {CvService} from './cv.service';
import {AppComponent} from './app.component';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {EducationComponent} from './education/education.component';
import {SkillsComponent} from './skills/skills.component';
import {JsonIterationPipe} from './pipes/json-iteration.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', redirectTo: '/basic-info', pathMatch: 'full'},
  {
    path: 'basic-info',
    component: BasicInfoComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
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

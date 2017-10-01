import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicInfoComponent} from './basic-info/basic-info.component';
import {EducationComponent} from './education/education.component';
import {SkillsComponent} from './skills/skills.component';

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
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { Injectable } from '@angular/core';
import {Cv} from './interfaces/cv';
import {BasicInfo} from './interfaces/basic-info';
import {Education} from './interfaces/education';
import {cvData} from './cvData';
@Injectable()
export class CvService {

  constructor() {

  }
  getCvData(): Promise<Cv> {
    return Promise.resolve(cvData);
  }
  getBasicInfoData(): Promise<BasicInfo> {
    return Promise.resolve(cvData.basicInfo);
  }
  getEducationData(): Promise<Education> {
    return Promise.resolve(cvData.education);

  }
  getSkillsData(): Promise<string[]> {
    return Promise.resolve(cvData.skills);
  }
}

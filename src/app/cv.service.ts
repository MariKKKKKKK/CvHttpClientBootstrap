import { Injectable } from '@angular/core';
import {Cv} from './interfaces/cv';
import {cvData} from './cvData';
@Injectable()
export class CvService {

  constructor() {

  }
  getCvData(): Promise<Cv> {
    return Promise.resolve(cvData);
  }
}

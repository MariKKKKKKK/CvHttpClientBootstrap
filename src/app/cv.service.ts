import { Injectable } from '@angular/core';
import {Cv} from './interfaces/cv';
import {BasicInfo} from './interfaces/basic-info';
import {Education} from './interfaces/education';
import {cvData} from './cvData';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CvService {
  private cvUrl = 'http://prostoshubi.me/cv.json';
  constructor(private http: Http) {

  }
  getCvData(): Promise<Cv> {
    return this.http.get(this.cvUrl).toPromise().then(response => response.json() as Cv ).catch(this.handleError);
  }
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

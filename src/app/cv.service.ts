import { Injectable } from '@angular/core';
import {Cv} from './interfaces/cv';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class CvService {
  private cvUrl = 'http://prostoshubi.me/cv.json';
  constructor(private http: HttpClient) {

  }
  getCvData(): Observable<Cv> {
    return this.http.get(this.cvUrl);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

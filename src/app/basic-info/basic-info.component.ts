import {Component, OnInit} from '@angular/core';
import {CvService} from '../cv.service';
import {BasicInfo} from '../interfaces/basic-info';
import {Contact} from '../interfaces/contact';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  providers: [CvService]
})
export class BasicInfoComponent implements OnInit {
  basicInfo: BasicInfo;

  constructor(private cvService: CvService) {
  }

  name: string;
  surname: string;
  contact: Contact;
  ngOnInit() {
    this.getBasicInfo();
  }

  getBasicInfo() {
    this.cvService.getCvData().then(cv => {
      this.basicInfo = cv.basicInfo;
      this.name = cv.basicInfo.name;
      this.surname = cv.basicInfo.surname;
      this.contact = cv.basicInfo.contact;
    });
  }
}

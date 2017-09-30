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
  contacts: Contact;

  ngOnInit() {
    this.getBasicInfo();
  }

  getBasicInfo(): void {
    this.cvService.getBasicInfoData().then(basicInfo => {
      this.name = basicInfo.name;
      this.surname = basicInfo.surname;
      this.contacts = basicInfo.contact;
    });
  }
}


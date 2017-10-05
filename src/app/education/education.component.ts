import {Component, OnInit} from '@angular/core';
import {CvService} from '../cv.service';
import {Education} from '../interfaces/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [CvService]
})
export class EducationComponent implements OnInit {
  educationList: Education;
  constructor(private cvService: CvService) {
  }

  ngOnInit() {
    this.getEducationData();
  }

  getEducationData(): void {
    this.cvService.getCvData().then(cvData => {
        this.educationList = cvData.education;
    });
  }

}

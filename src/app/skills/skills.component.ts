import {Component, OnInit} from '@angular/core';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [CvService]

})
export class SkillsComponent implements OnInit {
  skillsList: string[];

  constructor(private cvService: CvService) {
  }

  ngOnInit() {
    this.getSkiillsData();
  }

  getSkiillsData() {
    this.cvService.getCvData().subscribe(cvData => {
        this.skillsList = cvData.skills;
      },
      err => console.log(err)
    );
  }
}

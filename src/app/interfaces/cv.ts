import {Contact} from './contact';
import {BasicInfo} from './basic-info';
import {Education} from './education';
export interface Cv {
  "basicInfo": BasicInfo;
  "education": Education;
  "skills": string[];
}


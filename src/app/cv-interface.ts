export interface CvInterface {
  "basicInfo": BasicInfoInterface;
  "education": EducationInterface;
  "skills":  string[];
}
interface ContactInterface {
  [key: string]: string;
}
interface BasicInfoInterface {
  "name": string;
  "surname": string;
  "contact": ContactInterface;
}

interface EducationInterface {
  [key: string]: string;
}

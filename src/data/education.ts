export interface EducationItem {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string | null;
}

export const education: EducationItem[] = [
  {
    degree: "Diploma 4 Informatics Engineering",
    institution: "Information Technology, Malang State Polytechnic",
    startDate: "2023",
    endDate: null
  }
];

export interface ITeamMember {
  name: string;
  role: string;
  image?: string; // Make image optional
}

export const teamMembers: ITeamMember[] = [
  {
    name: "Dr. Ahmad Ibrahim",
    role: "Chief Medical Director"
  },
  {
    name: "Dr. Fatima Hassan",
    role: "Lead Gynecologist"
  },
  {
    name: "Dr. Mohammed Abubakar",
    role: "Pediatrician"
  },
  {
    name: "Dr. Aisha Yusuf",
    role: "General Practitioner"
  },
  {
    name: "Dr. Umar Sani",
    role: "Surgeon"
  },
  {
    name: "Nurse Zainab Muhammad",
    role: "Head Nurse"
  }
];

export const technicalTeamMembers: ITeamMember[] = [
  {
    name: "Engr. Yakubu Ali",
    role: "Biomedical Engineer"
  },
  {
    name: "Musa Ibrahim",
    role: "IT Administrator"
  },
  {
    name: "Amina Abdullahi",
    role: "Laboratory Technician"
  },
  {
    name: "Hassan Garba",
    role: "Maintenance Supervisor"
  }
];

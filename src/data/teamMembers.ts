export interface ITeamMember {
  name: string;
  role: string;
  image?: string; 
}

// Updated teamMembers array with correct names and roles
export const teamMembers: ITeamMember[] = [
  { name: "Dr Umoru BA", role: "Medical Director/Consultant" },
  { name: "Dr Chidama Paul", role: "Doctor" }, 
  { name: "Ibrahim David", role: "Head Nurse" },
  { name: "RN Adam Alkali Baba", role: "Nurse" },
  { name: "RN Maimuna", role: "Nurse" },
  { name: "Dr. Dala Abubakar", role: "Surgeon" },
  { name: "Mohammed Idris", role: "Admin/Desk Officer" },
  { name: "Dr. Chukwuka", role: "Surgeon" }
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

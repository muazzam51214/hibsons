export interface ApplicantType {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  dob : Date;
  education: string;
  linkedInUrl: string;
  resumeUrl:string;
  answers: Record<string, string | string[]>;
}
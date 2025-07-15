export interface Job {
  _id: string;
  title: string;
  slug: string;
  status: "open" | "closed";
  department: string;
  type: "Full-time" | "Part-time" | "Contract";
  location: string;
  experience: string;
  description: string;
  createdAt: string; // ISO string
}


export type QuestionType = "text" | "textarea" | "select" | "radio" | "checkbox";
export interface Question {
  text: string;
  type: QuestionType;
  options: string[];
}
export interface JobData {
  title: string;
  description: string;
  location: string;
  department: string;
  type: string;
  status : string;
  experience: string;
  questions: Question[];
}
export interface JobDataNew {
  title: string;
  description: string;
  location: string;
  department: string;
  type: string;
  status : string;
  experience: string;
  createdAt: Date;
}

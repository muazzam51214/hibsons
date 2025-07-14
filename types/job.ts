export interface Job {
  _id: string;
  title: string;
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
  experience: string;
  questions: Question[];
}

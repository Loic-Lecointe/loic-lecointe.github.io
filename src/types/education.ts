export type Education = {
  id: string;
  period: string;
  degree: string;
  institution?: string;
  location?: string;
  specialization?: string;
  status: string;
  summary: string;
  highlights: readonly string[];
};

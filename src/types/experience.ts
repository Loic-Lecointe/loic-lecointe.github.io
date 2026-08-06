export type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  summary: string;
  responsibilities: readonly string[];
  environment: readonly string[];
  confidential?: boolean;
};

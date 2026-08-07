export type AboutPrinciple = {
  id: string;
  title: string;
  description: string;
};

export type AboutProfile = {
  paragraphs: readonly string[];
  principles: readonly AboutPrinciple[];
  interests: readonly string[];
};

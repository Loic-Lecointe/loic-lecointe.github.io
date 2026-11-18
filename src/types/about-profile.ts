export type AboutProfile = {
  paragraphs: readonly string[];
  interests: readonly string[];
  languages: readonly { name: string; level: string }[];
};

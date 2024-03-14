export type Project = {
  name: string;
  description: string;
  slug: string;
  id: string;
  tech: string[];
  image?: string;
  isWireframe?: boolean;
  keyChallenges?: string[];
  sectors?: string[];
};
